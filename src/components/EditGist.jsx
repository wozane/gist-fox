import React from 'react'

const EditGist = (props) => {
  console.log('edit gist form open')
  console.log(props)
  return (
    <form /* onSubmit={this.handleSubmit} */>
      <label>{props.gist.description}</label><br />
      <textarea
        type="text"
        defaultValue={props.gist.content}
        onChange={props.editGist}
      /><br />
      <div>
        <button
          className="button is-primary"
          onClick={props.onFormSubmit}
        >
          Submit
        </button>
        <button
          className="button is-danger"
          onClick={props.onFormClose}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditGist
