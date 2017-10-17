import React from 'react'
import axios from 'axios'

class GistView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gist: null,
    }
  }

  componentDidMount() {
    this.fetchGist()
  }

  fetchGist() {
    const { match: { params } } = this.props
    axios.get(`https://private-anon-dc77e86d57-awapp.apiary-mock.com/gists/${params.id}`)
      .then((response) => {
        const gist = response.data
        this.setState({ gist })
      })
  }

  renderGist() {
    if (this.state.gist) {
      return (
        <div>
          <h2>{this.state.gist.description}</h2>
          <p>Date: {this.state.gist.creaded_at}</p><br />
          <p>{this.state.gist.content}</p>
        </div>
      )
    }

    return <span>Loading...</span>
  }

  render() {
    return (
      <div className="gist-view">{this.renderGist()}</div>
    )
  }
}

export default GistView
