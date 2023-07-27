# Excalibur
This project have the proporse to teach how the ecosystem of an api and frontend tests works.

API will be made in Rails and Front in React.

## API Version
Ruby 3.1.2
Rails 7.0.6

## API basic start
If you are new to Rails and need help, go to:
Rails doc (https://www.ruby-lang.org)
Rbenv version manager (https://github.com/rbenv/rbenv#readme)

rails new excalibur-api --api --database=postgresql
rails db:create

Check database:
psql -U postgres excalibur_api_development

API basic structure (example):

rails g scaffold brand name:string<br>
rails g scaffold category name:string<br>
rails g scaffold product name:string description:string price:decimal brand:references category:references<br>

rails db:migrate

## Build/Run

#### Requirements

- Node.js
- NPM

```javascript

/* First, Install the needed packages */
npm install

/* Then start the React app */
npm start

/* To run the tests */
npm run test

```

## Step by Step

[ViteJS](https://vitejs.dev/guide/) and [React](https://react.dev/) + [Typescript](https://www.typescriptlang.org/)

```javascript
npm create vite@latest

/* ✔ Project name: … traveling */
/* ✔ Select a framework: › React */
/* ✔ Select a variant: › TypeScript */

cd traveling
npm install
npm run dev
```

[Tailwind](https://tailwindcss.com/docs/guides/vite)

```javascript
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

[Router](https://reactrouter.com/en/main)

```javascript
npm install react-router-dom
```

Working...


