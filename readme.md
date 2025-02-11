# About

This creates a static website for maskedv.com since NuxtJS and NextJS failed on me

# Dev guide

1) `src/builder/dev_service/index.js` contains the main process of the builder. It opens a web server to see the website build and executes the transpiled JavaScript code.
2) `src/builder/core/` contains the builder logic to write the static website. Written in TypeScript which is transpiled and executed by the main process on changes detected
3) `src/builder/site` contains the structure and code logic of the website.

# Run guide

In a terminal go to `builder/`.

Install dependencies `npm i`.

Initiate Typescript transpiler `npx tsc --watch` to create `js_transpiled` directory.

Initiate the main process with `npm start` which opens a web development viewer and runs the core transpiled JavaScript code.

Output static website will be at `src/builder/build/`. That result is what is pushed into `master` branch. It also generates the static website in `builder/build/`

To see the website on the browser, in a terminarl go to `builder/build/` and execute `npx http-server`.

# CI/CD

todo
