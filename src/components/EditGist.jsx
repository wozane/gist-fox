import React from 'react'

const EditGist = (props) => {
  console.log('edit gist form open')

  return (
    <div>
      <label>{props.gist.description}</label><br />
      <textarea
        type="text"
        defaultValue={props.gist.content}
      /><br />
      <div>
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
