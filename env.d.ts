/// <reference types="vite/client" />
// import组件报红，可以如下设置
declare module "*.vue" {
  import { App, defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent> & {
      install(app: App): void;
  };
  export default component;
}