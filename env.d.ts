/// <reference types="vite/client" />

declare module 'vuex' {
  const Vuex: any
  export default Vuex
  export const createStore: any
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
