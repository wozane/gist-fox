import React from 'react'

import Gist from './Gist'
import { fetchGist } from '../helpers'

class GistView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gist: null,
    }
  }

  componentDidMount() {
    console.log(this.props)
    fetchGist(this.props.match.params.id).then((response) => {
      const gist = response.data
      this.setState({ gist })
    })
  }

  renderGist() {
    if (this.state.gist) {
      return <Gist gist={this.state.gist} />
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
