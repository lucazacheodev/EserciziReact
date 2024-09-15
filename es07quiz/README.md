# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
## QUIZ
Generare 10 domande a risposta multipla o vero/falso utilizzando il servizio
Open TRIVIA database: https://opentdb.com/api.php?amount=10
Visualizzare le domande restituite una per volta.
Gestire correttamente la risposta multipla (type: multiple) e il vero/falso (type: boolean).
Alla fine del quiz, dopo che è si è data risposta a tutte le domande, visualizzare il
contatore delle domande corrette su quelle totali (es. «7/10», 7 domande corrette su 10).
Se il risultato sarà maggiore di 6 verrà visualizzato un testo «Hai vinto», altrimenti
«Ritenta!»; in ogni caso ci sarà un bottone «RIPROVA» che farà ripartire il quiz da capo
con delle nuove domande.
