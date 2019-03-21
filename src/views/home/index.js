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