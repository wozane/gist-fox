import React from 'react'

class GistForm extends React.Component {
  constructor() {
    super()

    this.state = {
      gistTitle: this.props.gist.description || '',
      gistBody: this.props.gist.content || '',
    }
  }


  handleContentChage(e) {
    this.setState({ gistBody: e.target.value })
  }

  render() {
    return (
      <div>
        <h1>Edit gist</h1>
        <h3>{this.state.gistTitle}</h3>
        <text
          type="text"
        />{this.state.gistBody}
      </div>
    )
  }
}

export default GistForm
