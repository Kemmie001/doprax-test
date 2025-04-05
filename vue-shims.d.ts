/** @format */

// src/vue-shims.d.ts or just vue-shims.d.ts
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
