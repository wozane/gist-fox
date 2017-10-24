import React from 'react'
// import axios from 'axios'

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
    fetchGist(this.props.match.params.id).then((response) => {
      const gist = response.data
      this.setState({ gist })
    })
  }

  handleFormOpen() {
    console.log('open form')
    this.openForm()
  }
  handleFormClose() {
    console.log('close form')
    this.closeForm()
  }

  closeForm() {
    this.setState({ isOpen: false })
  }

  openForm() {
    this.setState({ isOpen: true })
  }

  /*   handleGistChange() {
    console.log('updating gist')

  } */

  renderGist() {
    if (this.state.gist) {
      return (
        <Gist
          id={this.state.gist.id}
          gist={this.state.gist}
          openEditForm={() => this.handleFormOpen()}
        />
      )
    }
    return <span>Loading...</span>
  }
  renderEditGist() {
    return (
      <EditGist
        id={this.state.gist.id}
        gist={this.state.gist}
        onFormSubmit={() => this.handleSubmit()}
        onFormClose={() => this.handleFormClose()}
      />
    )
  }

  render() {
    if (this.state.isOpen) {
      return (
        <div className="gist-edit">{this.renderEditGist()}</div>
      )
    }
    return (
      <div className="gist-view">{this.renderGist()}</div>
    )
  }
}

export default GistView
