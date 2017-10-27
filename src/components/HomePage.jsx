import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => (
  <div className="container">
    <header className="title"> Welcome! </header>
    <div className="content is-large">
      <Link to="/gists">
        Gists lists
      </Link>
    </div>
  </div>
)

export default HomePage
