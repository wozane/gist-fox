import React from 'react'

export default function (props) {
  return (
    <div>
      <h2>{props.gist.description}</h2>
      <p>Date: {props.gist.creaded_at}</p><br />
      <p>{props.gist.content}</p>
    </div>
  )
}
