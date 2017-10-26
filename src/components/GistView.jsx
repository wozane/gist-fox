import React from 'react'
// import axios from 'axios'

import Gist from './Gist'
import EditGist from './EditGist'
import { fetchGist, updateGist, deleteGist, starGist } from '../helpers'

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

  handleEditForm() {
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

  handleUpdate() {
    updateGist(this.props.match.params.id)
      .then((response) => {
        const gist = response.data
        this.setState({ gist })
      }).then(this.closeForm())
    console.log('gist updated')
    alert('gist updated')
  }

  handleDeleteClick() {
    console.log('gist deleted')
    deleteGist(this.props.match.params.id)
      .then(response => console.log(response))
    alert('🔥 gist deleted 🔥')
  }

  handleStarGist() {
    starGist(this.props.match.params.id)
      .then(response => console.log(response))
    alert('gist got a ⭐️ ')
  }

  renderGist() {
    if (this.state.gist) {
      return (
        <Gist
          id={this.state.gist.id}
          gist={this.state.gist}
          openEditForm={() => this.handleEditForm()}
          deleteClick={() => this.handleDeleteClick()}
          starGist={() => this.handleStarGist()}
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
        editClick={() => this.handleUpdate()}
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
