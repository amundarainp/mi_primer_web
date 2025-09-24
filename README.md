# Plantilla: Prettier + ESLint (flat) + Husky + lint-staged

- **Prettier**: formato/indentación automáticos
- **ESLint (flat config)**: buenas prácticas JS/TS
- **Husky + lint-staged**: validación y formato en `pre-commit`

## Scripts

- `npm run fmt` — Prettier (write)
- `npm run fmt:check` — Prettier (check)
- `npm run lint` — ESLint
- `npm run lint:fix` — ESLint con `--fix`

## Hooks

- `pre-commit` ejecuta `lint-staged`:
  - Lint + fix en JS/TS
  - Prettier en JSON/MD/HTML/CSS

## Uso

1. `npm i`
2. `npm run fmt`
3. `npm run lint`
