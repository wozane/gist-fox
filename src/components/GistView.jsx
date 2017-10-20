import React from 'react'

import Gist from './Gist'
import EditGist from './EditGist'
import { fetchGist } from '../helpers'

class GistView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gist: null,
      isOpen: false,
    }
  }

  componentDidMount() {
    console.log(this.props)
    fetchGist(this.props.match.params.id).then((response) => {
      const gist = response.data
      this.setState({ gist })
    })
  }

  handleFormOpen() {
    console.log('open form')
    this.setState({ isOpen: true })
  }

  renderGist() {
    if (this.state.gist) {
      return <Gist gist={this.state.gist} openEditForm={() => this.handleFormOpen()} />
    }
    return <span>Loading...</span>
  }

  render() {
    if (this.state.isOpen) {
      return (
        <EditGist />
      )
    }
    return (
      <div className="gist-view">{this.renderGist()}</div>
    )
  }
}

export default GistView
