##React项目准备详解
1. 安装项目
  `create-react-app react-cli`
2. 项目初始化
   1. 设置viewport
    ```html
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
    ```
   2. 设置rem
    ```js
    document.addEventListener('DOMContentLoaded', () => {
      const html = document.querySelector('html')
      let fontSize  = window.innerWidth / 10
      html.style.fontSize = (fontSize > 50 ? 50 : fontSize) + 'px'
    })
    ```
   3. 安装CSS预处理器（SASS）
    `yarn add node-sass scss-loader`
    之前我们设置了HTML的font-size,那么我们配置mixin.scss方便计算
    ```css
    $ration: 375 / 10;
    @function px2rem($px) {
      @return $px / $ration + rem
    }
    ```
   4. 重置样式文件RESET.CSS
   5. 引入字体图标
    [阿里巴巴矢量图](https://www.iconfont.cn/)
3. 路由
  安装路由  
  `yarn add react-router-dom`
  配置
  ```js  
  import React from 'react'
  import { BrowserRouter, Route } from 'react-router-dom'
  import Home from './views/home'
  class router extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home}></Route>
          </div>
        </BrowserRouter>
      )
    }
  }
  export default router
  ```
然后App.js引入

4. Redux
  安装
  `yarn add redux react-redux`
  异步操作
  `yarn add redux-thunk`
  配置
  ```js
  import {Provider} from 'react-redux'
  import store from './store'
  <Provider store={store}>
    <Router />
  </Provider>
  ```
  Store->index.js
  ```js
  import {createStore, compose, applyMiddleware} from 'redux'
  import thunk from 'redux-thunk'
  import reducer from './reducer'
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ))
  export default store
  ```
  Store->reducer.js
  ```js
  import {createStore, compose, applyMiddleware} from 'redux'
  import thunk from 'redux-thunk'
  import reducer from './reducer'
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ))
  export default store
  ```
  组件中调用
  ```js
  import React, { Component } from 'react'
  import {connect} from 'react-redux'
  import {actionCreators} from '../../store/user'

  class Home extends Component{
    render(){
      const { username, handleClick } = this.props
      return <div>Home{username}
        <button onClick={(ref) => handleClick(this)}>Click Me</button>
      </div>
    }
  }
  const mapStateToProps = state => {
    return {
      username: state.user.username
    }
  }

  const mapDispathcToProps = dispatch => {
    return {
      handleClick() {
        dispatch(actionCreators.setUserName('Li'))
      }
    }
  }

  export default connect(mapStateToProps, mapDispathcToProps)(Home)
  ```
5. axios
  `yarn add axios`
  封装axios
  ```js  
  import axios from 'axios'

  export const get = url => (
    (params={}) => (
      axios.get(url, {
        params
      }).then(res => {
        let {status, data} = res
        return status === 200 ? data : ''
      }).catch(e => {})
    )
  )
  ```
