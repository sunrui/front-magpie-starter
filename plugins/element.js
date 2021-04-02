// element-ui 配置文件
import Vue from 'vue'
import {
  Message
} from 'element-ui'
// 自定义主题文件
import '@/assets/css/theme/element-variables.scss'
Vue.prototype.$message = Message
import ElementUI from 'element-ui';
Vue.use(ElementUI);