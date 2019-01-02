// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.use(ElementUI)
// 专门用来看输出日志，有警告消息什么的，开发阶段需要，生产阶段不需要了
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // render:(h)=>h(App)作用相同
  // 注册局部组件
  // 把根组件注册为局部组件，局部组件可以在模板中用标签进行使用，使用完后和视图区域进行交换
  components: { App },
  // 这是一对App标签的简写
  template: '<App/>'
})
