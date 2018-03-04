import React from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/loginForm'
import BlogForm from './components/blogForm'
import Notification from './components/Notification'
import Button from './components/Button'
import Togglable from './components/Togglable'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      error: null,
      username: '',
      password: '',
      title: '',
      author: '',
      url: '',
      newBlog: null,
      user: null
    }
  }

  createBlog = (event) => {
    event.preventDefault()
    this.blogForm.toggleVisibility()
    const blogObject = {
      title: this.state.title,
      author: this.state.author,
      url: this.state.url,
      user: this.state.user
    }

    blogService
      .create(blogObject)
      .then(newBlog=> {
        this.setState({
          blogs: this.state.blogs.concat(newBlog),
          title: '',
          author: '',
          url: '',
          newBlog: null
        })
      })

      this.setState({ title: '', author: '', url:'', newBlog: null, error: "Created a new blog!"})
      setTimeout(() => {
        this.setState({ error: null })
      }, 3000)
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs: blogs.sort(
        function(a,b){
          return b.likes - a.likes
        }
      ) })
    )

    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        this.setState({user})
        blogService.setToken(user.token)
      }
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      blogService.setToken(user.token)
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      this.setState({ username: '', password: '', user, error: "Logged in!"})
      setTimeout(() => {
        this.setState({ error: null })
      }, 3000)
    } catch (exception) {
      this.setState({
        error: 'käyttäjätunnus tai salasana virheellinen',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  logout = async (event) => {
    event.preventDefault()
    window.localStorage.clear()
    if (this.state.user != null) {
      this.setState({ username: '', password: '', user: null, error: "Logged out"})
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  handleLoginFieldChange = (event) => {
  if (event.target.name === 'password') {
    this.setState({ password: event.target.value })
  } else if (event.target.name === 'username') {
    this.setState({ username: event.target.value })
  }
}
  handleCreateBlog = (event) => {
    if (event.target.name === 'title') {
      this.setState({ title: event.target.value })
    } else if (event.target.name === 'author') {
      this.setState({ author: event.target.value })
    } else if (event.target.name === 'url') {
      this.setState({ url: event.target.value })
    }
  }


render() {
   return (
     <div>
     <Notification message={this.state.error} />

     {this.state.user === null ?
       <Togglable buttonLabel="login">
         <LoginForm
           username={this.state.username}
           password={this.state.password}
           handleChange={this.handleLoginFieldChange}
           handleSubmit={this.login}
         />
       </Togglable> :
        <div>
        <div>
          <p>{this.state.user.username} logged in</p></div>
          <Button nimi="logout" onClick={this.logout} />

          <div>
            <h2>Blogs</h2>
            {this.state.blogs.map(blog =>
              <Blog key={blog._id} user={this.state.user} blog={blog}/>
            )}
          </div>

          <Togglable buttonLabel="new blog" ref={component => this.blogForm = component}>
            <BlogForm
              title={this.state.title}
              author={this.state.author}
              url={this.state.url}
              handleSubmit={this.createBlog}
              value={this.state.newBlog}
              handleChange={this.handleCreateBlog}
            />
          </Togglable>
        </div>
      }

     </div>
   );
 }
}

export default App;
