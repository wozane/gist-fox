import React from 'react'
import { Link } from 'react-router-dom'

import GistHeader from './GistHeader'

const Gist = ({ match }) => (
  <div className="gist-list">
    <GistHeader />
    <Link to={`${match.url}/32234234`} href={`${match.url}/32234234`}>
      dasdsad
    </Link>
  </div>
)

export default Gist
