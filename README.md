# octicons-vue3

Vue 3 components for GitHub Primer Octicons.

## Install

```sh
npm install octicons-vue3
```

## Usage

```vue
<script setup lang="ts">
import { MarkGithub, X } from 'octicons-vue3'
import Accessibility from 'octicons-vue3/icons/accessibility'
</script>

<template>
  <MarkGithub />
  <X :size="20" color="#cf222e" />
  <Accessibility size="1.25em" />
</template>
```

Each icon accepts:

| Prop | Type | Default |
| --- | --- | --- |
| `size` | `number \| string` | `16` |
| `color` | `string` | `currentColor` |

## Imports

Named imports are available from the package root:

```ts
import { Check, X, MarkGithub } from 'octicons-vue3'
```

Deep imports are available for individual icons:

```ts
import Check from 'octicons-vue3/icons/check'
```

## License and attribution

This package is released under the MIT license.

The icon path data is based on GitHub Primer Octicons, which is MIT licensed. See `NOTICE` for attribution details.
