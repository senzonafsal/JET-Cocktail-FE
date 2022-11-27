# Just Eat Takeaway.com Cocktail Frontend Application
Just Eat Takeaway.com Cocktail Frontend Application is a micro frontend [React](http://facebook.github.io/react/index.html) application that utilises [NPM Workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces) and [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/), loading data via [JETC Proxy Server](git@github.com:senzonafsal/JET-Cocktail-BE.git) that connects to [thecocktaildb.com](https://www.thecocktaildb.com/) API.

## Tools
Key tools used in this project are:

|                        Tool                         | Description   |
|:---------------------------------------------------:|--------------|
| [React](http://facebook.github.io/react/index.html) | A JavaScript library for building user interfaces |
|    [typescript](https://www.typescriptlang.org/)    | A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. |
|         [Webpack](https://webpack.js.org/)          | static module bundler for modern JavaScript applications |
|           [Material UI](https://mui.com/)           | comprehensive suite of UI tools to help you ship new features faster |
|            [SASS](http://sass-lang.com/)            | 	Sass is the most mature, stable, and powerful professional grade CSS extension language in the world |
|            [Babel](https://babeljs.io/)             | Use next generation JavaScript, today |
|             [JEST](https://jestjs.io/)              | Jest is a delightful JavaScript Testing Framework with a focus on simplicity. |

## Installation
[node.js](http://nodejs.org/download/) is required to get ``npm``.

If you would like to download the code and try it for yourself:

1. Clone the repo: `git@github.com:senzonafsal/JET-Cocktail-FE.git`
2. `cd JET-Cocktail-FE`
2. Install packages: `npm install`
3. Run `npm start` in parallel inside each module that are available under ./modules folder
4. Open your browser at: `http://localhost:3001`
5. Open your browser tabs at following URIs to see different modules in action :
   Search Module - `http://localhost:3002`
   Product Module - `http://localhost:3003`

Backend Service available at `git@github.com:senzonafsal/JET-Cocktail-BE.git`. 
Please follow the instructions in the JETC Backend Application read me file to run backend server. 

### TODO
1. Decouple Product and Search Module
2. Unit Test Code coverage improvement
3. Moving redundant code to shared module

## Author
[Afsal KH](https://github.com/senzonafsal)