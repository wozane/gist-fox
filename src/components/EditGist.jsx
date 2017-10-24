import React from 'react'

const EditGist = (props) => {
  console.log('edit gist open')
  return (
    <form>
      <h2>{props.gist.description}</h2>
      <label htmlFor={props.gist.content}>
        <input
          type="text"
          value={props.gist.content}
          onChange={props.changeContent}
        />
      </label>
    </form>
  )
}

export default EditGist
