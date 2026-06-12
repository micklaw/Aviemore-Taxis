# Aviemore Taxis website

Static website for [Aviemore Taxis](https://www.taxisinaviemore.com) — built with [Astro](https://astro.build) (+ React islands), hosted on an Azure Static Web App (Free tier).

## Stack

- **Astro 5** static site generation, with `@astrojs/react` for the two interactive islands (mobile nav, gallery lightbox) and `@astrojs/sitemap`
- **Image optimization** via `astro:assets`/Sharp — originals in `src/assets/images/` are emitted as responsive WebP/AVIF
- **Azure Static Web Apps (Free)** for hosting, defined in `infra/main.bicep`
- **GitHub Actions** (`.github/workflows/deploy.yml`) builds and deploys on push to `master`; PRs get preview environments that are torn down on close
- `public/staticwebapp.config.json` 301-redirects the legacy `*.html` URLs from the old site and serves a branded 404

## Local development

```sh
npm install
npm run dev        # dev server on http://localhost:4321
npm run build      # static build into dist/
```

To test the SWA routing rules (redirects, 404) locally:

```sh
npx @azure/static-web-apps-cli start ./dist
```

## Infrastructure

One-time setup (requires `az login` and `gh auth login`):

```sh
az group create -n rg-aviemore-taxis -l westeurope
az deployment group create -g rg-aviemore-taxis -f infra/main.bicep

# Deployment token for GitHub Actions:
az staticwebapp secrets list -n swa-aviemore-taxis -g rg-aviemore-taxis \
  --query "properties.apiKey" -o tsv
gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN --repo micklaw/Aviemore-Taxis --body "<token>"
```

If the deployment token is ever compromised, reset it with
`az staticwebapp secrets reset-api-key -n swa-aviemore-taxis -g rg-aviemore-taxis`
and update the GitHub secret.

When a custom domain is added later, update `site` in `astro.config.mjs` and the
`Sitemap:` line in `public/robots.txt`.
