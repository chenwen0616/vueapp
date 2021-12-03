## 配置路径
* 新建一个jsconfig.json文件，在里面配置
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*":["src/"]
    }
  },
  "exclude":["node_modules","dist"]
}

## 项目路由分析

### 安装less less-loader（5版本）版本过高会报错

配置路由
1.总结
路由组件与非路由组件的区别
1.1：路由组件一般放置在pages|views文件夹，非路由组件一般放置component文件夹
1.2：路由组件一般需要在router文件夹中进行注册（使用的即为组件的名字），非路由组件在使用的时候，一般都是以标签的形式使用
1.3：完成路由，不管路由组件还是非路由组件身上都有$route、$router属性

$route：一般获取路由信息【路径、query、params】
$router：一般进行编程式导航进行路由跳转

路由跳转
声明式导航router-link, 可以进行路由跳转
编程式导航push|replace，可以进行路由跳转

编程式导航：声明式导航能做的，编程式都能做
但是编程式导航除了可以进行路由跳转，还可以做一些其他业务逻辑

2、Footer组件显示隐藏
Footer组件：在Home、Search显示Footer组件
通过元信息判断组件显示或隐藏