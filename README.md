This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

### Steps to create the Next app

```bash
# Create next app
npx create-next-app@latest

# Install NextUI and Framer motion
npm install @nextui-org/react framer-motion --legacy-peer-deps

# Install prisma
npm i prisma
npm i @prisma/client@5.22.0 --silent

# Setup prisma with sqlite
npx prisma init --datasource-provider sqlite

# Migration
npx prisma migrate dev

# Next Auth
npm install @auth/core @auth/prisma-adapter next-auth@beta --legacy-peer-deps
npm i --save-exact @auth/core@0.18.1 @auth/prisma-adapter@1.0.6 next-auth@5.0.0-beta.3 --legacy-peer-deps

```

### Build production in locally

```bash
npm run build
npm run start
```
