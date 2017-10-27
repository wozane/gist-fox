import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import GistsList from './GistsList'
import GistView from './GistView'
import AboutView from './AboutView'
import Layout from './Layout'
import HomePage from './HomePage'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
    console.log(error, info)
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong</h2>
    }
    return (
      <main>
        <Router>
          <div className="container">
            <Layout>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/gists" component={GistsList} />
              <Route path="/gists/:id" component={GistView} />
              <Route path="/about" component={AboutView} />
            </Layout>
          </div>
        </Router>
      </main>
    )
  }
}

export default App
