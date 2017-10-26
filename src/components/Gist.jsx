import React from 'react'

export default function (props) {
  const starButton = props.star ? 'Star' : 'Unstar'
  return (
    <div>
      <h2>{props.gist.description}</h2>
      <p>Date: {props.gist.creaded_at}</p><br />
      <p>{props.gist.content}</p>
      <div>
        <button
          className="button is-warning"
          onClick={props.starGist}
        >
          {starButton}
        </button>
      </div>
      <button
        className="button is-primary"
        onClick={props.openEditForm}
      >
        Edit
      </button>
      <button
        className="button is-danger"
        onClick={props.deleteClick}
      >
        Delete
      </button>
    </div>
  )
}
