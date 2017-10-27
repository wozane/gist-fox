import React from 'react'

const EditGist = (props) => {
  console.log('edit gist form open')

  return (
    <div className="control">
      <label className="title">{props.gist.description}</label><br />
      <textarea
        className="textarea is-warning"
        type="text"
        defaultValue={props.gist.content}
      /><br />
      <div className="control">
        <button
          className="button is-primary"
          onClick={props.editClick}
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
    </div>
  )
}

export default EditGist
