const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const url = process.env.MONGODB_URI

mongoose.connect(url)
mongoose.Promise = global.Promise

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
  id:Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog

// const Blog = mongoose.model('Blog', {
//   title: String,
//   author: String,
//   url: String,
//   likes: Number
// })
//
// module.exports = Blog
