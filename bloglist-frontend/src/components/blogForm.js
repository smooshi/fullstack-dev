import React from 'react'
import PropTypes from 'prop-types'

const BlogForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <div>
            Title
            <input
              value={props.title}
              onChange={props.handleChange}
              name="title"
            />
          </div>
          <div>
            Author
            <input
              value={props.author}
              onChange={props.handleChange}
              name="author"
            />
          </div>
          <div>
            Url
            <input
              value={props.url}
              onChange={props.handleChange}
              name="url"
            />
          </div>
          <button type="submit">Create</button>
      </form>
  )
}

BlogForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default BlogForm
