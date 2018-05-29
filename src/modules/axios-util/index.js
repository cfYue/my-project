
import { Component } from 'react'

//引入了get、post方法
import Get from './get'
import Post from './post'

//将这些方法放在Component的原型上，这样，通过继承Component所生成的组件都可以用到这些方法了
Component.prototype.$get = Get
Component.prototype.$post = Post

//暴露出这个工具对象，方便于在其他地方，比如actionCreator中进行数据交互
export default {
    Get, Post
}