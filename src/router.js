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