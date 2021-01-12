import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const activeStyle = {
  color: 'red',
  fontWeight: 600,
  fontSize: '0.95rem'
}

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <header>
        <Link className="brand" to="/">
          <h4>
            Expense Tracker
          </h4>
        </Link>
        <nav>
          <NavLink to="/">Add</NavLink>
          <NavLink to="/history" activeStyle={activeStyle}>
            History
          </NavLink>
          <NavLink to="/charts" activeStyle={activeStyle}>
            Charts
          </NavLink>
      
        <NavLink className="login" to="/login" activeStyle={activeStyle}>
         Login
        </NavLink>
        <NavLink className="login" to="/register" activeStyle={activeStyle}>
         Register
        </NavLink>
        </nav>
      </header>
    )
  }
}

export default Header
