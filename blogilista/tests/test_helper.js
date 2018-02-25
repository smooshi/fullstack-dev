const User = require('../models/user')

// ...
const initialBlogs = [
  {
  "title":"Eka",
  "author":"pekka",
  "url":"1",
  "likes":"1",
  "id":"1"
  },
  {
  "title":"Tpka",
  "author":"Pena",
  "url":"2",
  "likes":"2",
  "id":"2"
  }
]

const usersInDb = async () => {
  const users = await User.find({})
  return users
}

module.exports = {
  initialBlogs, usersInDb
}
