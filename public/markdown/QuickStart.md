### 下载引入
下载：打开终端输入
```js
npm i lanmx-components-ui
```
引入：例如vue项目，打开main.ts/main.js
```js
import { createApp } from 'vue'
import App from './App.vue'

// 1. 在这里引入组件
import lanmxComponnetUI from 'lanmx-components-ui';
// 2. 引入组件样式
import 'lanmx-components-ui/style.css'; 

const app = createApp(App)
// 3. 注册
app.use(lanmxComponnetUI)

app.mount('#app')
```