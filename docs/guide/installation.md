# Installation

### Installing via NPM

The library is available [in NPM registry](https://www.npmjs.com/package/dataclass) and can be
installed via NPM or similar package manager:

```sh:no-line-numbers
npm install dataclass@beta
```

### Installing via CDNs

The library can be imported via [UNPKG](https://unpkg.com/). It is recommended to use `?module`
parameter to import ES Module version of the code:

```js:no-line-numbers
import { Data } from 'https://unpkg.com/dataclass@beta?module';
```

_Note: the library does not support [UMD](https://github.com/umdjs/umd) format._

In similar way, the library can be imported via [esm.sh](http://esm.sh/). This can be useful for
[Deno](https://deno.land/) since this CDN also serves `.d.ts` files.

```ts:no-line-numbers
import { Data } from 'https://esm.sh/dataclass@beta';
```

## Troubleshooting

The library is shipped with CommonJS and ES Module support. The source code is written using ES2015
features. Given [the global reach](https://caniuse.com/es6-class) of ES2015 Classes it is very
likely you won't need to compile this type of things. If the environments you are targetting support
these features or you know for sure that a node module will be properly pre-compiled if necessary,
you can skip the rest of this guide.

If older standards support required, the bundler of choice needs to be configured to transpile
`dataclass` dependency as well. Assuming you would like to use `dataclass` for its typings benefits,
you already have the build step in your environment.

### Using with Parcel or Vite

Parcel is capable of properly transpiling `node_modules` and relies on Browserslist to figure stuff.
Make sure you have `browserslist` defined. Read more
[in Parcel docs](https://parceljs.org/getting-started/webapp/#declaring-browser-targets).

Vite has a special way to handle dependencies transpiling. Read more
[in the related guide](https://vitejs.dev/guide/dep-pre-bundling.html).

### Using with Create React App

Create React App transpiles `node_modules` as a part of the build pipeline and relies on
Browserslist to figure what to transpile. Make sure you have `browserslist` properly configured.
Read more
[in CRA docs](https://create-react-app.dev/docs/supported-browsers-features/#configuring-supported-browsers).

### Using with Webpack

Assuming the project uses Webpack and Babel. _TODO_