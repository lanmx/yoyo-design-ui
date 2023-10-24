
import Button from '../packages/button/index.vue'
import Selector from '../packages/selector/index.vue'
const coms = [Button, Selector]
  
const install = function(Vue) {
  coms.forEach((com) => {
    console.log(com, com.name, '---注册');
    Vue.component(com.name, com)
  })
}

// // 1.路径 2.是否匹配子集 3.匹配规则
// const requireComponent = require.context('./', true, /\.vue$/);
// const install = (Vue) => {
//   if (install.installed) return
//   install.installed

//   requireComponent.keys().forEach(element => {
//     const config = requireComponent(element)
//     console.log(config);
//     const componentName = config.default.name;
//     Vue.component(componentName, config.default || config)
//   })
// }
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export default install