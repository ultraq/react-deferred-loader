
react-deferred-loader
=====================

[![Build Status](https://github.com/ultraq/react-deferred-loader/actions/workflows/build.yml/badge.svg)](https://github.com/ultraq/react-deferred-loader/actions)
[![Coverage Status](https://coveralls.io/repos/github/ultraq/react-deferred-loader/badge.svg?branch=master)](https://coveralls.io/github/ultraq/react-deferred-loader?branch=master)
[![npm](https://img.shields.io/npm/v/@ultraq/react-deferred-loader.svg?maxAge=3600)](https://www.npmjs.com/package/@ultraq/react-deferred-loader)
[![Bundlephobia minified size](https://img.shields.io/bundlephobia/min/@ultraq/react-deferred-loader)](https://bundlephobia.com/result?p=@ultraq/react-deferred-loader)

Delay the rendering of a loader animation/component by 1 second.  This is useful
for not prematurely putting users into a "passive" state of waiting that a
loader normally signals, thus giving the appearance of a faster web application.

Inspired by this talk by Eli Fitch about perceived performance:
https://twitter.com/elifitch/status/1047187122229321728


Installation
------------

```
npm install @ultraq/react-deferred-loader
```


Usage
-----

The `<DeferredLoader>` takes a single child function that is passed a boolean
value of whether the 1 second has elapsed (`true`) or not (`false`), eg:

```jsx
import DeferredLoader from '@ultraq/react-deferred-loader';

<DeferredLoader>
  {showLoader => showLoader ? (
    /* Render your loading component here */
  ) : null}
</DeferredLoader>
```
