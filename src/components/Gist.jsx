import React from 'react'

import StarButton from './StarButton'

const Gist = props => (
  <div className="control">
    <h2 className="label">{props.gist.description}</h2>
    <p>Date: {props.date}</p><br />
    <p className="textarea is-primary">{props.gist.content}</p>
    <div>
      <StarButton
        star={props.star}
        starGist={() => props.starGist()}
        unstarGist={() => props.unstarGist()}
      />
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
  </div>
)

export default Gist
