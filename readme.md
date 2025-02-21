# About

This creates a static website for maskedv.com since NuxtJS and NextJS failed on me

# Dev guide

1) `src/builder/dev_service/index.js` contains the main process of the builder. It executes the transpiled JavaScript code. Re runs it on changes detected.
2) `src/builder/core/` contains the builder logic to write the static website. Written in TypeScript which is transpiled and executed by the dev service process on changes detected.
3) `src/builder/site` contains the structure and code logic of the website. Also in TypeScript.

# Run guide

In a terminal go to `src/builder/`.

Install dependencies `npm i`.

Remove directory `src/builder/js_transpiled` to prevent errors.

Initiate Typescript transpiler `npx tsc --watch` to create `src/builder/js_transpiled` directory.

In a second terminal at same path, initiate the main process with `npm start` which watches for changes on `src/builder/js_transpiled` to execute the core transpiled JavaScript code.

Output static website will be at `src/builder/build/`. That result is what is pushed into `master` branch. It also generates the static website in `builder/build/`

To see the website on the browser, in a terminarl go to `builder/build/` and execute `npx http-server`.

# Page modes

Frameworks create pages.

## Mode 1

Creates an html page with one CSS and JavaScript file. Can have a custom navbar. Can have custom Meta SEO tags.

Navbar is writen on page by the flag `vnavbarv`.

Header SEO is writen on page by the flag `vheadseov`.

## Simple File

A file that contains simple data. Like a `.gitignore` file. It only needs a path to be writen to, a name and the content. Yes, a whole page can be rendered using only this type of logic too.

## Mode 2

in development

# CI/CD

todo
