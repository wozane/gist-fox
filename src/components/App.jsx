import React from 'react'

import Navbar from './Navbar'
import Gist from './Gist'
import Footer from './Footer'
// import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <div className="container notification">
    <Navbar />
    <Gist />
    <Footer />
  </div>
)

export default App
