output "pages_url" {
  description = "Adresse du site sur le sous-domaine Cloudflare (fonctionne avant le nom de domaine)."
  value       = "https://${cloudflare_pages_project.site.subdomain}"
}

output "site_url" {
  description = "Adresse publique du site."
  value       = local.has_domain ? "https://${var.domain}" : "https://${cloudflare_pages_project.site.subdomain}"
}
