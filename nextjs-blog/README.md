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
3. Look for best practices to organize Next.js application
   https://codedamn.com/news/nextjs/next-js-best-practices
   https://www.smashingmagazine.com/2021/11/maintain-large-nextjs-application/
   https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472
   https://giancarlobuomprisco.com/next/a-scalable-nextjs-project-structure

   Done:

   - re-organized app folders
   - added module path aliases @app and @common
   - added prettier auto import re-ordering
   - added TODO items below

4. Add Redux/Redux-Saga - Done. Added Recoil as client side state management.
   Interesting article AGAINST using it in the Next.js app: https://javascript.plainenglish.io/should-you-use-redux-in-next-js-5e57201c34da
   Questions:

   - What to use for state management (https://recoiljs.org/ or Zustand or just React Context API)? What is best works with Next.js?
   - What to use for async server calls (fetch, react-query, Axios)? What is best works with Next.js?

   Final decision:

   - Recoil is very neat state management library but it seems that development tools part is still not stable. The functions specified in the documentation
     marked as "\_UNSTABLE" suffix. The core state management claims to be production ready.
   - I saw recommendation to use Context API in many many articles. But it just shows that people had never built a big applications. All my concerns about that highlighted in this
     article: https://www.smashingmagazine.com/2021/08/state-management-nextjs/ which I'm fully agree with.
   - Some articles are pointing to React-Query as an option (new name seems to be TanStack Query) or SWR

   As the result after reading multiple articles and comparison between different state management libraries for the React I decided to go with the Recoil.
   This is very type safe and performant library. The dev tools part is still under development but the core of the library is in use by multiple projects within Facebook.
   Some very good cource here: https://learnrecoil.com/course

5. Add Axios/React Query - Use Axios with Recoil.js
   Opted out to do not use React Query to avoid multiple issues.
   Recoil: You can implement refetching on mutation, initial fetch loader, fetch without loader, fetch on focus, etc easily in Recoil with atomEffect, which let you control bi-directional data fetching.
   Additionally, it seems for the more real world usage (global 401 handling, JWT security etc) for API calls you still need to use something like Axios.
   Not clear why I need "React Query" at all especially when I have caching at the Recoil level.
   https://lazypandatech.com/blog/NextJs/50/REST-API-Call-using-Axios-Interceptor-in-React-NextJs/
   https://prateeksurana.me/blog/mastering-data-fetching-with-react-query-and-next-js/
   For the SSR: https://nextjs.org/docs/api-routes/introduction

6. Configure unit tests (views, etc). I had added Jest with some simple test as POC. Need ato add tests for Recoil, more complex component unit tests
7. Add Cypress test framework for End-To-End testing ???
8. Add and test API call proxying - Added in Next.js app
9. Using module path aliases https://unlyed.github.io/next-right-now/reference/module-path-aliases - Done. Added @app and @common
10. Enforce import paths. I.e. do not allow import pages or app specific classes from the common code - TODO: fix in .eslintrc.json

Optional & things to try:

11. Using Storybook for seprate component development https://storybook.js.org/
12. Ready for production Next.js practices: https://nextjs.org/docs/going-to-production
13. Code splitting in Next.js: https://nextjs.org/docs/advanced-features/dynamic-import
14. Read more about getInitialProps, getStaticProps, getStaticPaths, getServerSideProps - Done
    Good video: https://www.youtube.com/watch?v=J1E2-hJZUVg&t=41s
    https://nextjs.org/docs/basic-features/data-fetching/overview

## Example Next.js project folders structure:

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

#### Install dependencies with yarn

```html
yarn
```

#### Using Plop JS

```html
yarn generate
```
