variable "account_id" {
  description = "Identifiant du compte Cloudflare (tableau de bord > Workers & Pages > colonne de droite)."
  type        = string
}

variable "zone_id" {
  description = "Identifiant de la zone DNS du nom de domaine (tableau de bord > ton domaine > Vue d'ensemble). Inutile sans domaine."
  type        = string
  default     = ""
}

variable "project_name" {
  description = "Nom du projet Cloudflare Pages. Le site sera aussi accessible sur <nom>.pages.dev."
  type        = string
  default     = "laura-nguegang"

  validation {
    condition     = can(regex("^[a-z0-9][a-z0-9-]{0,56}[a-z0-9]$", var.project_name))
    error_message = "Lettres minuscules, chiffres et tirets uniquement."
  }
}

variable "domain" {
  description = "Nom de domaine complet du site, par exemple laura-nguegang.fr. Vide = site servi uniquement sur <project_name>.pages.dev."
  type        = string
  default     = ""

  validation {
    condition     = var.domain == "" || var.zone_id != ""
    error_message = "Avec un nom de domaine, zone_id est obligatoire."
  }
}

variable "record_name" {
  description = "Nom de l'enregistrement DNS dans la zone : « @ » pour le domaine nu, « www » pour un sous-domaine."
  type        = string
  default     = "@"
}
