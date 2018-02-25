
const blogiRouter = require('express').Router()
const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

morgan.token('body', function (req) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :response-time :body'))

app.use(cors())
app.use(bodyParser.json())

//const url = process.env.MONGODB_URI
//mongoose.connect(url)

const formatBlog = (blog) => {
  return {
    title: blog.title,
    author: blog.author,
    url: blog.url,
    likes: blog.likes,
    id: blog.id
  }
}

const getTokenFrom = (request) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

blogiRouter.get('/info', (request, response) => {
  Blog
    .find({})
    .then(result => {
      const text = `testi`
      response.send(text)
    })

})

blogiRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs.map(formatBlog))
})

blogiRouter.post('/', async (request, response) => {
  const body = request.body

  try {
    const token = getTokenFrom(request)
      const decodedToken = jwt.verify(token, process.env.SECRET)

      if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
      }

    if (body.author === undefined) {
      return response.status(400).json({ error: 'author missing' })
    }
    if (body.title === undefined) {
      return response.status(400).json({ error: 'title missing' })
    }
    if (body.url === undefined) {
      return response.status(400).json({ error: 'url missing' })
    }
    const user = await User.findById(body.userId)

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      id: body.id,
      user: user._id
        })

      if (blog.likes === undefined) {
        blog.likes = 0
      }
      //const blog = new Blog(request.body)
      const savedBlog = await blog.save()
      user.blogs = user.blogs.concat(savedBlog._id)

    await user.save()
      response.json(formatBlog(blog))

    } catch (exception) {
  if (exception.name === 'JsonWebTokenError') {
    response.status(401).json({ error: exception.message })
  } else {
    console.log(exception)
    response.status(500).json({ error: 'something went wrong...' })
  }
}
})

blogiRouter.get('/:id', async (request, response) => {
  try {
    const blog = await Blog.findById(request.params.id)

    if (blog) {
      response.json(formatBlog(blog))
    } else {
      response.status(404).end()
    }

  } catch (exception) {
    console.log(exception)
    response.status(400).send({ error: 'malformatted id' })
  }
})

blogiRouter.delete('/:id', async (request, response) => {
  try {
    await Blog.findByIdAndRemove(request.params.id)

    response.status(204).end()
  } catch (exception) {
    console.log(exception)
    response.status(400).send({ error: 'malformatted id' })
  }
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


module.exports = blogiRouter
