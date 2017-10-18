import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import GistsList from './GistsList'
import GistView from './GistView'
import AboutView from './AboutView'
import Layout from './Layout'
import HomePage from './HomePage'


const App = () => (
  <main>
    <Router>
      <div className="container">
        <Layout>
          <Route exact path="/" component={HomePage} />
          <Route path="/gist/:id" component={GistView} />
          <Route exact path="/gists" component={GistsList} />
          <Route path="/about" component={AboutView} />
        </Layout>
      </div>
    </Router>
  </main>
)

export default App
