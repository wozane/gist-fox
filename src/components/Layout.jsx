import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = props => (
  <div className="container is-fluid">
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout
