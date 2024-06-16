# MarvelVerse

<a id="readme-top"></a>

## Table of Contents

<a name="readme-top"></a>

  <summary>Summary</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built with</a></li>
        <li><a href="#tested-with">Tested with</a></li>
        <li><a href="#pipeline">Pipeline</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#api-integration">Api Integration</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
<br>

## About the project

MarvelVerse is a dynamic web application that lets users explore various Marvel characters, view their details, and manage their favorite characters.
<br><br>

<div align="center">
  <img src="https://media.discordapp.net/attachments/1114204200885301331/1252010941285929040/marvelverse-cpc.netlify.app_home_2.png?ex=6670a98d&is=666f580d&hm=26e9a726b641f5722813dd99a6e2f66ecd84f0d0f78406d3845bb15695469705&=&format=webp&quality=lossless&width=514&height=901" alt="Login page" height="300">
  <img src="https://media.discordapp.net/attachments/1114204200885301331/1252010940946448445/marvelverse-cpc.netlify.app_home_3.png?ex=6670a98d&is=666f580d&hm=0104d9214f22538a63f37af201046780cfabef83ff377d0212a4f0b1a02877e4&=&format=webp&quality=lossless&width=514&height=901" alt="List page" height="300">
  <img src="https://media.discordapp.net/attachments/1114204200885301331/1252010940589936722/marvelverse-cpc.netlify.app_home_4.png?ex=6670a98d&is=666f580d&hm=51c28b7606b8821865e7fbb7927f5ca731bd47a04d692ce5ab7473ffbb0f99cd&=&format=webp&quality=lossless&width=514&height=901" alt="Detail page" height="300">
  <img src="https://media.discordapp.net/attachments/1114204200885301331/1252010941651091638/marvelverse-cpc.netlify.app_home_5.png?ex=6670a98d&is=666f580d&hm=add529eaf4e9467da77b51fddd439c1c0c882bd1bf2e536eb1dbefd3eb8f53f9&=&format=webp&quality=lossless&width=514&height=901" alt="Add page" height="300">
</div>

<br>

<a id="built-with"></a>

<div align="center">
  <h3 style="border-bottom: 2px solid #DDD; width: 100%;">Built With</h3>
</div>

<br>

<div align="center">
  <a href="https://reactjs.org/"><img src="https://badgen.net/badge/React/v18.2.0/blue?icon=react" alt="React"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://badgen.net/badge/TypeScript/v5.2.2/blue?icon=typescript" alt="TypeScript"></a>
  <a href="https://reactrouter.com/"><img src="https://badgen.net/badge/React%20Router/v6.23.1/orange?icon=react-router" alt="React Router"></a>
  <a href="https://axios-http.com/"><img src="https://badgen.net/badge/Axios/v1.7.2/blue?icon=axios" alt="Axios"></a>
  <a href="https://styled-components.com/"><img src="https://badgen.net/badge/styled-components/v6.1.11/pink?icon=styled-components" alt="styled-components"></a>
</div>

<br>

<a id="tested-with"></a>

<div align="center">
  <h3 style="border-bottom: 2px solid #DDD; width: 100%;">Tested With</h3>
</div>

<br>

<div align="center">
  <a href="https://mswjs.io/"><img src="https://img.shields.io/badge/Vitest-v1.6.0-green?logo=Vitest" alt="Vitest"></a>
  <a href="https://testing-library.com/docs/react-testing-library"><img src="https://img.shields.io/badge/React_Testing_Library-v16.0.0-orange?logo=testing-library" alt="React Testing Library"></a>
  <a href="https://mswjs.io/"><img src="https://img.shields.io/badge/MSW-v2.3.1-green?logo=msw" alt="MSW"></a>
</div>

<br>

<a id="pipeline"></a>

<div align="center">
  <h3 style="border-bottom: 2px solid #DDD; width: 100%;">Pipeline</h3>
</div>

<br>

<div align="center">
<a href="https://prettier.io/"><img src="https://img.shields.io/badge/Prettier-Code%20Formatting-ff69b4?logo=prettier" alt="Prettier"></a>
  <a href="https://typicode.github.io/husky"><img src="https://badgen.net/badge/Husky/v8.0.0/blue" alt="Husky"></a>
  <a href="https://eslint.org/"><img src="https://img.shields.io/badge/ESLint-Code%20Linting-yellow?logo=eslint" alt="ESLint"></a>
</div>
<br>

<br>

<p align="center">(<a href="#readme-top">back to top</a>)</p>

## Getting started

<br>

### Prerequisites

To use this app, you'll need to have the following tool installed:
<br>  
[![Node.js](https://badgen.net/badge/Node.js/v20.9.0/green?icon=node.js)](https://nodejs.org/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/cpcastells/cpc-marvel.git
cd cpc-marvel
```

2. Install NPM packages

```sh
npm install
```

3. Set up environment variables:

```plaintext
Rename .env.template to .env and update the variables accordingly.
```

<br>

## Usage

To run the application in development mode:

```sh
npm run dev
```

This will start the application with Vite serving the assets without minification for easier debugging.

For production mode, which serves concatenated and minified assets, use:

```bash
npm run build
npm run preview
```

Note: Before committing any changes, it's recommended to run ESLint to ensure code quality and style adherence. You can run ESLint by executing the command:

```sh
npm run lint
```

The application includes comprehensive unit and integration tests using Vitest. Here are the commands to run tests:

To run all tests:

```sh
npm run test
```

To run tests in watch mode, which reruns tests as you make changes to the code:

```sh
npm run test:dev
```

<br>

<p align="center">(<a href="#readme-top">back to top</a>)</p>

## Project Structure

<br>

```
/cpc-marvel
  ├── .github/workflows      # CI/CD pipelines
  ├── .husky                 # Git hooks
  ├── node_modules           # Project dependencies
  ├── public                 # Static files
  ├── src                    # Source files
  │   ├── components         # Reusable UI components
  │   ├── contexts           # React Context API files
  │   ├── hooks              # Custom React hooks
  │   ├── pages              # Application pages
  │   ├── styles             # Styled-components styles
  │   └── utils              # Utility functions
  ├── .env                   # Environment variables
  ├── .eslintrc.js           # ESLint rules
  ├── package.json           # Project manifest
  └── README.md              # This file
```

<p align="center">(<a href="#readme-top">back to top</a>)</p>
<br>

## Features

- **Character List View:** Displays 50 characters or search results, with options to add to favorites.
- **Character Detail View:** Shows detailed information about the character.
- **Responsive Design:** Mobile and desktop layouts.
- **Favorite Management:** Users can add or remove characters from favorites, with persistence across views.

#### Upcoming features

- **Character Detail View:** Display a slider featuring the character's comics.

## Api Integration

All data is fetched from the Marvel API (http://gateway.marvel.com/v1/). For detailed documentation, visit [Marvel API Documentation](https://developer.marvel.com/documentation/getting_started).

<a id="demo"></a>

<div align="center">
  <h3 style="font-size: 1.5rem; border-bottom: 2px solid #DDD; width: 100%;">Demo</h3>
</div>

<p align="center">Check the demo <a href="https://marvelverse-cpc.netlify.app/home"><br><img src="https://media.discordapp.net/attachments/1114204200885301331/1252017731113320448/marvel.png?ex=6670afe0&is=666f5e60&hm=4705d454d7193fe133635f2a2a9daf7cfa968756b6f3ffdecd62142b9110138b&=&format=webp&quality=lossless" alt="Logo" width="120"></a></p>

<a id="contact"></a>

<div align="center">
  <h3 style="font-size: 1.5rem; border-bottom: 2px solid #DDD; width: 100%;">Contact</h3>
</div>

I am grateful for any feedback and welcome it, as it helps improve the project and address any potential improvements or issues.

<br>

<div align="center">
  <a href="https://www.linkedin.com/in/carlespueyodeveloper/">
    <img src="https://img.shields.io/badge/LinkedIn-Carles_Pueyo-blue?logo=linkedin" alt="LinkedIn">
  </a>
</div>

<br>

<p align="center">(<a href="#readme-top">back to top</a>)</p>
<br>
