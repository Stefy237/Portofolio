# Infrastructure du site : un projet Cloudflare Pages (déploiement direct depuis GitHub Actions),
# le nom de domaine personnalisé et l'enregistrement DNS qui pointe dessus.

resource "cloudflare_pages_project" "site" {
  account_id        = var.account_id
  name              = var.project_name
  production_branch = "main"

  # Pas de bloc « source » : le code n'est pas lié à Cloudflare, c'est GitHub Actions
  # qui construit le site et l'envoie (wrangler pages deploy). Le build reste ainsi
  # entièrement sous ton contrôle, dans ton pipeline.
}

resource "cloudflare_pages_domain" "site" {
  account_id   = var.account_id
  project_name = cloudflare_pages_project.site.name
  domain       = var.domain
}

resource "cloudflare_record" "site" {
  zone_id = var.zone_id
  name    = var.record_name
  type    = "CNAME"
  content = cloudflare_pages_project.site.subdomain
  proxied = true
  comment = "Portfolio — géré par Terraform"
}
