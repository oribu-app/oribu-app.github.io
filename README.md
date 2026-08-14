# oribu-app.github.io

Official website for [Oribu](https://github.com/oribu-app/oribu-app), built with
[VitePress](https://vitepress.dev/).

## Development

```bash
cd website
pnpm install
pnpm dev
```

## Structure

- `website/` - the VitePress site source (`src/`) and tooling config.
- `.github/workflows/deploy.yml` - builds and deploys to GitHub Pages on push to `master`,
  manual dispatch, or when `oribu-app/oribu-app` dispatches an `app_release` event (see that
  repo's `release_published.yml`).
