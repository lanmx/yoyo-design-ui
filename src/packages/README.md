## 一些通用组件开发
一边学习一边开发，若有问题，可以提交，我有时间一定会看和修改；
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
### 按钮
text: 按钮文字
#### 类型
```
type：primary/success/warn/danger
```
```html
<x-button text="默认"></x-button>
<x-button text="主要" type="primary"></x-button>
<x-button text="成功" type="success"></x-button>
<x-button text="警告" type="warn"></x-button>
<x-button text="危险" type="danger"></x-button>
```
#### 边框样式
```
dashed/solid
```
```html
<x-button text="虚线" dashed></x-button>
<x-button text="实线" solid></x-button>
```
#### 尺寸大小
```
size: small/larger
```
```html
<x-button text="默认大小"></x-button>
<x-button type="success" text="小尺寸" size="small"></x-button>
<x-button type="warn" text="大尺寸" size="larger"></x-button>
```
#### 颜色设置
```
color: green/#0070ff，接受颜色编码字符串
```
```html
<x-button text="颜色" color="pink"></x-button>
<x-button text="颜色" color="yellow"></x-button>
```
#### 边框圆角
```
round
```
```html
<x-button text="默认圆角" round></x-button>
<x-button text="主要圆角" type="primary" round></x-button>
<x-button text="危险圆角" type="danger" round></x-button>

```

### 选择器
开发中