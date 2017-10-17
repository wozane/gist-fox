import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import GistHeader from './GistHeader'

class GistList extends React.Component {
  constructor() {
    super()

    this.state = {
      gists: [],
    }
  }

  componentDidMount() {
    this.fetchGist()
  }

  fetchGist() {
    const apiUrl = 'https://private-anon-dc77e86d57-awapp.apiary-mock.com/gists'
    axios.get(apiUrl)
      .then((response) => {
        // const { data: { _embedded: gists } } = response
        const gists = response.data._embedded.gists
        this.setState({ gists })
      })
  }

  render() {
    return (
      <div className="gist-list">
        <GistHeader />
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
}

export default GistList
