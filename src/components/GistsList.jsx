import React from 'react'
import { Link } from 'react-router-dom'

import GistHeader from './GistHeader'
import { fetchGists, createGist } from '../helpers'

class GistList extends React.Component {
  constructor() {
    super()
    this.state = {
      gists: [],
    }
  }


  componentDidMount() {
    fetchGists().then((response) => {
      const gists = response.data._embedded.gists
      this.setState({ gists })
    })
  }

  handleCreate() {
    createGist().then(response => console.log(response))
    alert('gist created')
  }

  renderList() {
    if (this.state.gists) {
      return (
        <div className="control">
          <ul>
            {this.state.gists.map(gist => (
              <li key={gist.id} className="label">
                <Link to={`/gist/${gist.id}`}>
                  {gist.description}
                </Link>
              </li>))}
          </ul>
        </div>
      )
    }
    return <span>Loading ... </span>
  }

  renderStarList() {
    if (this.state.gists.length > 0) {
      return (
        <div className="control">
          <ul>
            {this.state.gists.map(gist => (
              <li key={gist.id} className="label">
                <Link to={`/gist/${gist.id}/star`}>
                  Starred gists
                </Link>
              </li>))}
          </ul>
        </div>
      )
    }
    return <span>Loading ... </span>
  }

  render() {
    return (
      <div className="box">
        <GistHeader />
        <div className="content">
          <div className="container is-medium">{this.renderList()}</div>
          <div className="container is-medium">{this.renderStarList()}</div>
        </div>
        <button
          className="button is-primary"
          onClick={() => this.handleCreate()}
        >
          Create new gist
        </button>
      </div>
    )
  }
}

export default GistList
