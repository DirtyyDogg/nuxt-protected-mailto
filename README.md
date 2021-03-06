# nuxt-protected-mailto

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> This module tries to protect email-addresses in your Nuxt SSG / SSR project from spam bots without without sacrificing usability. The HTML output of the mail geht's encoded to HTML Unicode Entities. Mailto: Links will be handled by javascript instead of a `href="mailto:test@example.com"`.

[**Demo**](https://mmoollllee.github.io/nuxt-protected-mailto/)

[📖 Release Notes](./CHANGELOG.md)

## Setup

1. Add `nuxt-protected-mailto` dependency to your project

```bash
yarn add nuxt-protected-mailto # or npm install nuxt-protected-mailto
```

2. Add `nuxt-protected-mailto` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'nuxt-protected-mailto',
  ]
}
```

3. Set `build.html.minify.decodeEntities = false` in `nuxt.config.js`

```js
{
  build: {
    html: {
      minify: {
        decodeEntities: false
      }
    }
  }
}
```

4. Use the global `Mailto` Component
With the Email as output.
```html 
<Mailto mail='test@example.com' subject="Optional Example Subject" body="Optional Placeholder Body" title="Write me a email" />
```

With Caption
```html 
<Mailto mail='test@example.com' subject="Optional Example Subject" body="Optional Placeholder Body" title="Write me a email">
  Button Caption
</Mailto>
```

## What it does

All it does, is encoding the mail address and binding a click event to hide every kind of "mailto:" in the HTML. Also it supports adding a placeholder for subject and body that will be prefilled in the user's mail application.

```js
  // components/lib/Mailto.vue
  computed: {
    encoded() {
      const buf = []
      for (let i = this.mail.length - 1; i >= 0; i--) {
        buf.unshift(['&#', this.mail.charCodeAt(i), ';'].join(''))
      }
      return buf.join('')
    }
  },
  methods: {
    mailtoHandler(e) {
      e.preventDefault()
      window.location.href =
        'mailto:' +
        this.mail +
        '?subject=' +
        encodeURIComponent(this.subject) +
        '&body=' +
        encodeURIComponent(this.body)
    }
  }
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## Help wanted

This is my very first NUXT Module. Please reach out to me if there is something I could do better.

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-protected-mailto/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-protected-mailto

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-protected-mailto.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-protected-mailto

[circle-ci-src]: https://img.shields.io/circleci/project/github/.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/

[codecov-src]: https://img.shields.io/codecov/c/github/.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/

[license-src]: https://img.shields.io/npm/l/nuxt-protected-mailto.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-protected-mailto
