import React from 'react'

export default function (props) {
  console.log(props.openEditForm)
  return (
    <div>
      <h2>{props.gist.description}</h2>
      <p>Date: {props.gist.creaded_at}</p><br />
      <p>{props.gist.content}</p>
      <button
        className="button is-warning"
        onClick={props.openEditForm}
      >
        Edit
      </button>
      <button
        className="button is-danger"
      >
        Delete
      </button>
    </div>
  )
}
