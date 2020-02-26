import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/">Link To Index</Link>
        <br />
        <Link to="/new">Create A God!!!</Link>

      </div>
    )
  }
}

