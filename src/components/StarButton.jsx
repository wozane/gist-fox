import React from 'react'

const StarButton = (props) => {
  if (props.star) {
    return (
      <button className="button is-warning" onClick={() => props.starGist()}>
        Unstar
      </button>
    )
  }
  return (
    <button className="button is-dark" onClick={() => props.unstarGist()}>
      Star
    </button>
  )
}

export default StarButton
