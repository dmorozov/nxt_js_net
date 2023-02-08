This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, after cloning the project you need to install all dependencies and build to validate local development environment:

```bash
yarn install
yarn build
```

To run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Recommended VSCode plugins:

- ESLint
- vscode-styled-components
- Git History
- GitLens
- Git Graph
- Prettier
- Prettier ESLint
- Auto Import

## TODO:

1. Add eslint and prettify - Done
   Source: https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js
2. Add styled components and common theme - Done
   Source: https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3
3. Look for best practices to organize Next.js application - Read, got some ideas, added TODO items below.
   https://codedamn.com/news/nextjs/next-js-best-practices
   https://www.smashingmagazine.com/2021/11/maintain-large-nextjs-application/
   https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472
   https://giancarlobuomprisco.com/next/a-scalable-nextjs-project-structure
4. Add Redux/Redux-Saga - ?
   Interesting article AGAINST using it in the Next.js app: https://javascript.plainenglish.io/should-you-use-redux-in-next-js-5e57201c34da
   Questions:

   - What to use for state management (https://recoiljs.org/ or Zustand or just React Context API)? What is best works with Next.js?
   - What to use for async server calls (fetch, react-query, Axios)? What is best works with Next.js?

5. Add Axios to use with Redux-Saga - ?
   https://levelup.gitconnected.com/integrate-apis-in-next-js-with-redux-and-axios-10-step-guide-3d20a2bc9365
6. Configure unit tests (views, redux, etc). Jest??? - ?
7. Add and test API call proxying - ?
8. Using Redux toolkit to reduce redux related boilerplate code https://redux-toolkit.js.org/
9. Using module path aliases https://unlyed.github.io/next-right-now/reference/module-path-aliases
10. Enforce import paths. I.e. do not allow import pages or app specific classes from the common code

Optional & things to try:

11. Using Storybook for seprate component development https://storybook.js.org/
12. Ready for production Next.js practices: https://nextjs.org/docs/going-to-production
13. Code splitting in Next.js: https://nextjs.org/docs/advanced-features/dynamic-import

## Recommended Next.js project folders structure:

```
/public
    favicon.ico
/src
    /common
        /components
            /elements
                /[Name]
                    [Name].tsx
                    [Name].test.ts
        /hooks
        /utils
    /domain
    /services
    /store
        /actions
        /reducers
        /sagas
    /modules
        /auth
            /api
                AuthAPI.js
                AuthAPI.test.js
            /components
                AuthForm.tsx
                AuthForm.test.ts
            auth.js
    /pages
        /api
          /authAPI
              authAPI.js
          /[Name]API
              [Name]API.js
        _app.tsx
        _document.tsx
        index.tsx
```
