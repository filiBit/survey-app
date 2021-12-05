[![Netlify Status](https://api.netlify.com/api/v1/badges/dd2861fc-093a-4f5a-a2a6-a9a83a9d761b/deploy-status)](https://app.netlify.com/sites/filips-survey-app/deploys)

A React App with dynamically rendered survey (form), a mock API providing form data, and both: a client-side and a server-side validation. Live version is [deployed on Netlify](https://filips-survey-app.netlify.app/).

## About

The app renders a survey based on mocked API's response. Frontend features live validation (as the user types), but doesn't prevent the user from submitting the form. Once the form is submitted, the API returns either a success, or an error response and the user is given a feedback.

## Browser Support

Babel is configured with default **browserslist** configuration and polyfills are enabled, hence the App should support all major browsers and their somewhat older versions.

## Tech

The frontend framework is **React**; The language is **Typescript**; The App is Bundled with **Webpack**, transpiled with **Babel** and code style is enforced with **ESLint**. Finally, the CSS is provided by **TailwindCSS** and is transformed with **PostCSS**.

## Usage with the CLI

**Install dependencies:**

- `npm install`

**Run the app in a development mode:**

- `npm start`

**Make ESLint show you a list of errors and warnings:**

- `npm run lint`

**Make ESlint try to fix errors and enforce code style:**

- `npm run lint:fix` **_(This command also runs on staged files as a pre-commit hook)_**

**Build the app:**

- `npm run build`

## 😊 Any questions?

filip.biterski@gmail.com
