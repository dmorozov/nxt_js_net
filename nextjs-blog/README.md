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
3. Add and test API call proxying - ?
4. Look for best practices to organize Next.js application - ?
5. Add Redux/Redux-Saga - ?
6. Add Axios to use with Redux-Saga - ?
7. Configure unit tests (views, redux, etc)
