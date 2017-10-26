import React from 'react'

import StarButton from './StarButton'

export default function (props) {
  return (
    <div>
      <h2>{props.gist.description}</h2>
      <p>Date: {props.gist.creaded_at}</p><br />
      <p>{props.gist.content}</p>
      <div>
        <StarButton
          star={props.star}
          starGist={() => props.starGist()}
          unstarGist={() => props.unstarGist()}
        />
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
