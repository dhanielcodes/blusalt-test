## Blusalt-test

## Prerequisites

```
node >= v20
npm  >= v10
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and based on:

- [TypeScript](https://www.typescriptlang.org) - JavaScript with syntax for types
- [Tailwind CSS (v3)](https://tailwindcss.com/docs/installation) - a CSS framework

## Getting Started

Begin by cloning the repository and running the following commands:

```bash

npm install
npm run dev
# or
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 

## Directory structure

Basic directory structure

    blusalt-test/         -- top level directory
      app/          -- Contains Application files
        charts/          -- Every Chart Compoenent kept here
        components/      -- Components including generic buttons, input fields, forms and bits.
        context/         -- Context files.
        icons/           -- App icons.
        layouts/         -- App-related layouts.
        libs/            -- Contains app data used on the dashboard.
        pages/           -- Application screens, importted in pages
        types/           -- Types
      libs/            -- Contains app Utility functions
      pages/           -- Application pages
      public/          -- Public assets - images etc
