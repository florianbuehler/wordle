<h1 align="center">
  Wordle
</h1>

<p align="center">
    <a style="text-decoration: none" href="https://reactjs.org/" alt="React">
        <img src="https://img.shields.io/badge/framework-React-61dbfb" /></a>
    <a style="text-decoration: none" href="https://www.typescriptlang.org/" alt="TypeScript">
        <img src="https://img.shields.io/badge/language-TypeScript-3178c6" /></a>
    <a style="text-decoration: none" href="https://styled-components.com/" alt="Styled Components">
        <img src="https://img.shields.io/badge/styling-Styled_Components-dd6f93" /></a>
    <a style="text-decoration: none" href="https://react.semantic-ui.com/" alt="Semantic UI React">
        <img src="https://img.shields.io/badge/component_library-Semantic_UI_React-35bdb2" /></a>
    <a style="text-decoration: none" href="https://eslint.org/" alt="Eslint">
        <img src="https://img.shields.io/badge/linter-ESLint-4a31c3" /></a>
    <a style="text-decoration: none" href="https://prettier.io/" alt="Prettier">
        <img src="https://img.shields.io/badge/code_style-Prettier-ff69b4" /></a>
</p>


A small clone of the popular word guessing game _**Wordle**_.


### Gameplay

The goal of the game is to guess a secret 5-letter word in at most six tries. 
After every guess, each letter is marked as either green, yellow or gray:

- green indicates that letter is correct and in the correct position
- yellow means it is in the answer but not in the right position
- gray indicates the letter is not in the answer at all

### Rules

Each guess must be a valid 5-letter word.


## 🚀 Getting started

If you want to play around with the code yourself - feel free to do so 🧑🏻‍💻. First clone the project using
```shell script
git clone https://github.com/florianbuehler/wordle.git
```
(or alternatively using SSH and `git@github.com:florianbuehler/wordle.git`) and then navigate into the root folder of the project and run
```shell script
npm install
```
to install the required packages into the `node_modules` folder.


## 🔧 Development

To start the development server with hot reload configured, run
```shell script
npm run dev
```
and then navigate to `http://localhost:3000` in your Browser.

To help ensuring some basic formatting and code quality standards, the project has prettier and eslint configured. So you can simply use
```shell script
npm run eslint
```
to see if the code matches the standards and run
```shell script
npm run fix-eslint
```
to let eslint fix it automatically where possible.
