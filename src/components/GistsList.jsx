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
        <div>
          <ul >
            {this.state.gists.map(gist => (
              <li key={gist.id}>
                <Link to={`/gist/${gist.id}`}>
                  {gist.description}
                </Link>
                <p>Created at: {gist.created_at}</p>
              </li>))}
          </ul>
        </div>
      )
    }
    return <span>Loading ... </span>
  }

  render() {
    return (
      <div className="gist-list">
        <GistHeader />
        <div>{this.renderList()}</div>
        <button
          className="button is-primary is-small"
          onClick={() => this.handleCreate()}
        >
          Create
        </button>
      </div>
    )
  }
}

export default GistList
