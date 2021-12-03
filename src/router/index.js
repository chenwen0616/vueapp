// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
// 配置路由
export default new VueRouter({
  routes:[
    {
      path: '/home',
      component: Home,
      meta:{
        show:true
      }
    },
    {
      path: '/search/:keyword?', //加入？时params参数可传可不传
      name:'search',
      component: Search,
      meta:{
        show:true
      },
      // 路由组件传递props属性 三种写法
      // 第一种：布尔值写法  只能传递params参数
      // props: true  
      // 第二种：对象写法 额外给路由传递一些props 值是固定的
      // props:{a:1,b:2} 
      // 第三种：函数写法  可以params和query参数传递
      props:($route)=>{
        return {
          keyword:$route.params.keyword,
          k:$route.query.k
        }
      }
    },
    {
      path: '/login',
      component: Login,
      meta:{
        show:false
      }
    },
    {
      path: '/register',
      component: Register,
      meta:{
        show:false
      }
    },
    // 重定向，在项目跑起来的时候，访问"/"时定向到首页
    {
      path:'*',
      redirect: '/home'
    }
  ]
})