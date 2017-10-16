import React from 'react'
import axios from 'axios'

import GistHeader from './GistHeader'

class GistList extends React.Component {
  constructor() {
    super()

    this.state = {
      gists: [],
    }
  }

  componentDidMount() {
    const apiUrl = 'https://private-anon-dc77e86d57-awapp.apiary-mock.com/gists'
    axios.get(apiUrl)
      .then((response) => {
        const gists = response.data._embedded.gists.map(gist => gist.description)
        this.setState({ gists })
      })
  }

  render() {
    return (
      <div className="gist-list">
        <GistHeader />
        <ul>
          {this.state.gists.map(gist => <li key={gist.id}>{gist.description}</li>)}
        </ul>
      </div>
    )
  }
}

export default GistList
