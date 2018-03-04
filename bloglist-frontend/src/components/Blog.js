import React from 'react'
import blogService from '../services/blogs'
import Button from './Button'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      key : props._id,
      blog : props.blog,
      user : props.user,
      visible: false,
      error: ''
    }
  }

  toggleVisibility = () => {
    this.setState({visible: !this.state.visible})
  }

  likeBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: this.state.blog.title,
      author: this.state.blog.author,
      url: this.state.blog.url,
      likes: this.state.blog.likes+1,
      user: this.state.blog.user,
      _id: this.state.blog._id
    }
    //console.log(blogObject)
    //console.log(this.state.blog._id)
    blogService
      .update(this.state.blog._id, blogObject)
      .then(response => {
        this.setState({
          blog: blogObject
        })
      })
  }

  deleteBlog = (event) => {
    const ok = window.confirm(`Poistetaanko ${this.state.blog.title}`)
    if (!ok) {
      return
    }

    blogService
      .remove(this.state.blog._id)
      .then(response => {
        window.location.reload();
      })
  }

  render() {
    const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }

    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }

    return (
      <div style={blogStyle}>
      <div style={hideWhenVisible} onClick={this.toggleVisibility}>
        {this.state.blog.title} {this.state.blog.author}
      </div>
      <div style={showWhenVisible} onClick={this.toggleVisibility}>
      <div className="title">
        <p>Title:{this.state.blog.title}</p>
      </div>
      <p>Author: {this.state.blog.author}</p>
      <p>Url: {this.state.blog.url}</p>
      <p>{this.state.blog.likes} likes </p>
      <p><Button nimi="like" onClick={this.likeBlog}/></p>
      <p>Added by {this.state.blog.user.username}</p>
      {(this.state.blog.user === undefined || this.state.blog.user.username === this.state.user.username) &&
          <p><Button nimi="delete" onClick={this.deleteBlog}/></p>
      }
      </div>
      </div>
    )
  }
}

export default Blog
