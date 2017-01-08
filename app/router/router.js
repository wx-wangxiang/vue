import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatRoom from '../components/app.vue'
import ComponentTest from '../components/componenttest.vue'

Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Test = { template: '<div>test</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。

const routes = [
	{path: '/chatroom', component: ChatRoom},
	{path: '/test', component: Test},
	{path: '/componenttest', component: ComponentTest}
]

const router = new VueRouter({routes: routes})

export default router