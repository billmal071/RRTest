# Article Builder

Task for RapidRiver test. Article creation and Results. The home page on route / contains the article creation page, with the form which submits to the json typicode api. The results page returns results from the api also and can be filtered using the search and clicking on the button

## Features

- **Modern UI:** DaisyUI ensures a sleek and consistent user interface.
- **Development friendly:** Vite provides fast bundling and hot reloading for a seamless workflow, React router for routing.
- **Code quality:** Eslint and Prettier keep your code clean and maintainable.
- **Test:** Test written in vitest

## Prerequisites

- Node.js LTS version
- pnpm

## Getting Started

1. Clone the repository.
2. Run `pnpm install` to install dependencies.
3. Start the development server with `pnpm run dev`.
4. Navigate to http://localhost:5173 in your browser to access the app.

## Project Structure

src/
|- assets
|— components/ # Reusable UI components
|- hook/ Reusable api hooks using swr
|- http/ # Axios hook
|— pages/ # Application pages (Create/Results)
|- routes/ # Routes for the pages
|- validation/ # Client side validation done using zod
|— index.js # Browser entry point
package.json # Project dependencies and scripts
README.md # This file!

## Scripts

- `start`: Starts the development server.
- `build`: Builds the production-ready app.
- `test`: Runs unit tests.
- `lint`: Lints the codebase.
- `format`: Formats the codebase with Prettier.

## Development Workflow

1. Edit code in the `src` directory.
2. The development server automatically reloads when changes are made.
3. Use ESLint and Prettier to maintain code quality.
4. Utilize browser developer tools for debugging.

## Live link

[live](https://rr-articles.netlify.app/)
