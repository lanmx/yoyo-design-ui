import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import App from './App.vue'
import router from './router'

import lanmxComponentsUI from 'lanmx-components-ui';
import 'lanmx-components-ui/style.css';

import plugins from '@/plugins'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lanmxComponentsUI)
app.use(ArcoVue);
app.use(plugins)

app.mount('#app')
