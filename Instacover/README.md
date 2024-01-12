Zadani aplikace V Listu se zobrazi seznam filmu z url -> https://raw.githubusercontent.com/Ghamry0x1/Star-Wars-Movie-App/master/movies.json kazdy item bude obsahovat obrazek napr, nazev filmu a cislo epizody -> https://raw.githubusercontent.com/Ghamry0x1/Star-Wars-Movie-App/master/public/images/star_wars_episode_1_poster.png pod flatlistem bude tlacitko, ktery pretridi seznam filmu vzestupne/sestupne podle epizod

To start with npm -> npm i -> npm run dev

Vite React aplikace s tailwindem & typescriptem, snad jsem se trefil do zadání, je to všechno v jednom filu pro jednoduchost.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
