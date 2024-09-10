<a id="readme-top"></a>

## Índice

* [About The Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Source Tree](#source-tree)
* [Available Scripts](#available-scripts)
* [Learn More](#learn-more)


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="./public/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Podcaster</h3>

</div>

## About The Project
This application allows the user to search for and browse through a list of podcasts, each one with specific details about the chapters of the podcast in question.

### Built With

  [![React][React.js]][React-url]
  
  [![Redux][Redux.io]][Redux-url]

  [![Mui][MUI.io]][MUI-url]

  [![Typescript][Typescript.io]][Typescript-url]

  [![RTL][RTL.io]][RTL-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
  
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/sasegura/inditex-frontend.git
   ```
2. Open direcory
   ```sh
   cd inditex-frontend
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start project
   ```sh
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
6. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
7. Run test
   ```sh
   npm run test
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Initially we have a list of the top 100 podcasts of which we can see the details by clicking on them and we can also listen to the different episodes by selecting them from the list shown in the details of each of the podcasts.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Source Tree
```
inditex-frontend
├─ package-lock.json
├─ package.json
├─ public
├─ src
│  ├─ App.css
│  ├─ App.test.tsx
│  ├─ App.tsx
│  ├─ components
│  │  ├─ episodeCouter
│  │  ├─ episodeTable
│  │  ├─ filterInput
│  │  ├─ headerSection
│  │  ├─ podcast
│  │  ├─ podcastDescriptionCard
│  │  └─ skeletons
│  ├─ containers
│  │  ├─ episodeDetail
│  │  ├─ episodeList
│  │  ├─ header
│  │  ├─ podcastDetail
│  │  └─ podcastsList
│  ├─ hooks
│  ├─ index.css
│  ├─ index.tsx
│  ├─ interfaces
│  ├─ pages
│  │  ├─ episodePage
│  │  └─ podcastPage
│  ├─ redux
│  │  ├─ slices
│  │  │  ├─ apiSlice.ts
│  │  │  └─ mainSlice.ts
│  │  └─ store.ts
│  ├─ reportWebVitals.ts
│  ├─ router.tsx
│  ├─ setupTests.ts
│  └─ utils
│     ├─ constant.ts
│     ├─ test
│     └─ utils.ts
└─ tsconfig.json

```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Redux.io]: https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[MUI.io]: https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white
[MUI-url]: https://mui.com/
[Typescript.io]: https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[RTL.io]: https://img.shields.io/badge/React%20testing%20library-4a4a55?style=for-the-badge&logo=testinglibrary&logoColor=E33332
[RTL-url]: https://testing-library.com/




