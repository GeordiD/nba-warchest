// custom.d.ts
declare module '*.svg' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent
  export default component
}

declare module '*.svg?componentext' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent
  export default component
}

