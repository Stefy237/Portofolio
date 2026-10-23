/**
 * Lecture des données GitHub AU MOMENT DU BUILD (jamais dans le navigateur).
 *
 * - Infos d'un dépôt : API REST publique. Fonctionne sans jeton (60 requêtes/heure).
 * - Graphe de contributions : API GraphQL, qui exige un jeton (variable GITHUB_TOKEN).
 *
 * En cas d'échec (pas de réseau, quota, jeton absent), les fonctions renvoient null
 * et le site se construit quand même : l'élément concerné n'est simplement pas affiché.
 */

export interface RepoInfo {
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  pushedAt: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  /** 0 = aucune contribution, 4 = quartile le plus actif. */
  level: 0 | 1 | 2 | 3 | 4;
}

export interface Contributions {
  total: number;
  /** Une entrée par semaine, chaque semaine contient jusqu'à 7 jours (dimanche → samedi). */
  weeks: ContributionDay[][];
}

const API = 'https://api.github.com';
const TIMEOUT_MS = 8000;

function token(): string | undefined {
  const fromVite = import.meta.env?.GITHUB_TOKEN as string | undefined;
  const value = fromVite || process.env.GITHUB_TOKEN;
  return value && value.trim() !== '' ? value.trim() : undefined;
}

function headers(): Record<string, string> {
  const h: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'portfolio-laura-build',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  const t = token();
  if (t) h.Authorization = `Bearer ${t}`;
  return h;
}

// Cache pour la durée d'un build : chaque dépôt n'est demandé qu'une fois.
const repoCache = new Map<string, Promise<RepoInfo | null>>();
let contributionsCache: Promise<Contributions | null> | null = null;

export function getRepo(fullName: string): Promise<RepoInfo | null> {
  if (!/^[\w.-]+\/[\w.-]+$/.test(fullName)) {
    console.warn(`[github] Nom de dépôt invalide : « ${fullName} » (format attendu : propriétaire/nom)`);
    return Promise.resolve(null);
  }
  let pending = repoCache.get(fullName);
  if (!pending) {
    pending = fetchRepo(fullName);
    repoCache.set(fullName, pending);
  }
  return pending;
}

async function fetchRepo(fullName: string): Promise<RepoInfo | null> {
  try {
    const res = await fetch(`${API}/repos/${fullName}`, {
      headers: headers(),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) {
      console.warn(`[github] ${fullName} : réponse ${res.status}, infos du dépôt ignorées.`);
      return null;
    }
    const data = (await res.json()) as {
      html_url: string;
      description: string | null;
      language: string | null;
      stargazers_count: number;
      pushed_at: string;
    };
    return {
      url: data.html_url,
      description: data.description,
      language: data.language,
      stars: data.stargazers_count,
      pushedAt: data.pushed_at,
    };
  } catch (error) {
    console.warn(`[github] ${fullName} : impossible de joindre l'API (${(error as Error).message}).`);
    return null;
  }
}

const LEVELS: Record<string, ContributionDay['level']> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export function getContributions(user: string): Promise<Contributions | null> {
  if (!contributionsCache) contributionsCache = fetchContributions(user);
  return contributionsCache;
}

async function fetchContributions(user: string): Promise<Contributions | null> {
  if (!token()) {
    console.warn('[github] Pas de GITHUB_TOKEN : le graphe de contributions ne sera pas affiché.');
    return null;
  }
  const query = `query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks { contributionDays { date contributionCount contributionLevel } }
        }
      }
    }
  }`;
  try {
    const res = await fetch(`${API}/graphql`, {
      method: 'POST',
      headers: { ...headers(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { login: user } }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) {
      console.warn(`[github] Contributions : réponse ${res.status}.`);
      return null;
    }
    const json = (await res.json()) as {
      data?: {
        user?: {
          contributionsCollection: {
            contributionCalendar: {
              totalContributions: number;
              weeks: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }[];
            };
          };
        };
      };
      errors?: { message: string }[];
    };
    const calendar = json.data?.user?.contributionsCollection.contributionCalendar;
    if (!calendar) {
      console.warn(`[github] Contributions indisponibles : ${json.errors?.[0]?.message ?? 'réponse vide'}.`);
      return null;
    }
    return {
      total: calendar.totalContributions,
      weeks: calendar.weeks.map((w) =>
        w.contributionDays.map((d) => ({
          date: d.date,
          count: d.contributionCount,
          level: LEVELS[d.contributionLevel] ?? 0,
        })),
      ),
    };
  } catch (error) {
    console.warn(`[github] Contributions : impossible de joindre l'API (${(error as Error).message}).`);
    return null;
  }
}
