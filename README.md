# Solid snowpack starter (+ tailwind 2)

Solid + snowpack + tailwindcss template
You get HMR out of the box and full PWA compatible.

## Install

Regardless of how you chose to get the project installed locally, it's recommanded to use [pnpm](https://pnpm.js.org/) to install your dependencies. It's faster, safer and easier.

Once cloned, you can just run `pnpm install`.

### Using github template

Click on the **Use this template** green button at the top right

### Using degit

`npx degit amoutonbrady/solid-snowpack-starter new-dir`

## Configure

You don't have much configuration to do yourself. Out of the box everything should just work.
When building for production, you might want to change some assets regarding icons & app name. You can do so in the [public](./public) folder.
Most of the link I used to generate the PWA files are available in the [index.html](./public/index.html)

## Available Scripts

### (p)npm run dev

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### (p)npm run build

Builds a static copy of your site to the `build/` folder.
The build uses rollup for minimum file size output
Your app is ready to be deployed!

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in.
