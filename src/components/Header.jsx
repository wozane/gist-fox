import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <nav className="navbar is-light">
      <div className="level-left">
        <Link to="/">Get Home</Link>
      </div>
    </nav>
  </div>
)

export default Header
