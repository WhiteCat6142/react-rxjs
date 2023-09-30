# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

 [React + Vite で開発環境を作ってみた](https://zenn.dev/longbridge/articles/93f63e0423785b)

```sh
npm create vite
```

eslint alredy is installed if using template.

### husky
 [コードを綺麗に保ちたい？それhuskyでできるよ！](https://qiita.com/mu-suke08/items/43a492fda5cd71a31506)
 [husky + lint-staged でコミット前にlintを強制する方法](https://zenn.dev/risu729/articles/latest-husky-lint-staged)
 [Why husky has dropped conventional JS config](https://blog.typicode.com/husky-git-hooks-javascript-config/)

```sh
git init
npx husky-init
npm i
npx husky add .husky/pre-commit "npm run pre-commit"
nano .husky/pre-commit
nano package.json
```

please check .husky/pre-commit
```sh
-  npm test
+  npm run pre-commit
```

package.json
```json
  "scripts":{
    "pre-commit": "npm test && npx lint-staged"
  },
```

### lint-stged

 [lint-staged](https://github.com/okonet/lint-staged#configuration)
 [Set up ESLint and lint-staged for JS/JSX/React project](https://medium.com/@adwin.tw/set-up-eslint-and-lint-staged-for-js-jsx-react-project-f5f5ef77eab7)
 [Some of your tasks use git add command.](https://github.com/okonet/lint-staged/issues/775)

```sh
npm install --save-dev lint-staged
nano package.json
```

package.json
```json
  "lint-staged": {
    "*.{js,jsx}": [
      "eslint --fix"
    ]
  }
```
 [no-unused-vars](https://runebook.dev/ja/docs/eslint/rules/no-unused-vars)
 [TypeScript: ESLintで`_`を変数に含めた時に`no-unused-vars`のルールを無効化する方法MEMO](https://madogiwa0124.hatenablog.com/entry/2022/05/07/154628)

.eslintrc.cjs
```json
   'no-unused-vars': [
      'warn',
      { vars: 'local', "argsIgnorePattern":"^_", "varsIgnorePattern": "^_" }
    ]
```
