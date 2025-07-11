This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## Best Practices Implemented

- **Tailwind CSS v4+ Setup:**
  - Uses the new `@tailwindcss/postcss` plugin for PostCSS compatibility.
  - Minimal, clean global CSS with only necessary custom properties.
  - Tailwind config targets only relevant files for optimal build size.
- **Component Structure:**
  - UI is broken into small, reusable components (`PostsList`, `ToggleButton`).
  - JSDoc is used for prop type hints, even in JS, for better editor support and maintainability.
- **Data Fetching:**
  - Uses [SWR](https://swr.vercel.app/) for robust, declarative data fetching and caching.
  - API logic is separated from UI, and error/loading states are handled gracefully.
- **API Layer:**
  - Next.js API routes are used for server-side data fetching and abstraction.
- **General:**
  - Clean, readable code with clear separation of concerns.
  - Minimalist, accessible, and responsive UI using Tailwind utility classes.
