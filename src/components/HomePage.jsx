import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => (
  <div>
    <header> Welcome! </header>
    <Link to="/gists">
      Gists lists
    </Link>
  </div>
)

export default HomePage
