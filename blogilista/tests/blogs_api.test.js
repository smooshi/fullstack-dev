const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)
const Blog = require('../models/blog')

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

beforeAll(async () => {
  await Blog.remove({})
  console.log('cleared')
  initialBlogs.forEach(async (note) => {
    let noteObject = new Blog(note)
    await noteObject.save()
    console.log('saved')
  })
  console.log('init done')
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {
  const response = await api
    .get('/api/blogs')

  expect(response.body.length).toBe(initialBlogs.length)
})

test('empty blog post returns error', async () => {
  const newBlog = {}
  await api
    .post('/api/blogs/')
    .send(newBlog)
    .expect(400)
    .expect('Content-Type', /application\/json/)
})

test('no title post returns error', async () => {
  const newBlog = {author:"test", url:"test", likes:"1"}
  await api
    .post('/api/blogs/')
    .send(newBlog)
    .expect(400)
    .expect('Content-Type', /application\/json/)
})

test('no url post returns error', async () => {
  const newBlog = {title:"test", author:"test", likes:"1"}
  await api
    .post('/api/blogs/')
    .send(newBlog)
    .expect(400)
    .expect('Content-Type', /application\/json/)
})

test('proper blog post returns ok', async () => {
  const newBlog = {title:"test", author:"test", url:"test", likes:"1", id:3}
  await api
    .post('/api/blogs/')
    .send(newBlog)
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('after addingall blogs are returned', async () => {
  const response = await api
    .get('/api/blogs')

  expect(response.body.length).toBe(initialBlogs.length+1)
})

test('blog with no likes passes post', async () => {
  const newBlog = {title:"tester", author:"tester", url:"tester", id:4}
  await api
    .post('/api/blogs/')
    .send(newBlog)
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('blog without likes added is 0', async () => {
  const response = await api
    .get('/api/blogs')

  expect(response.body[3].likes).toBe(0)
})

test('blog is deleted by id', async () => {
  const response = await api
    .get('/api/blogs')
    let id = response.body[4]._id
    .delete('/api/blogs/${id}')
    .expect(204)
    .expect('Content-Type', /application\/json/)
})

test('after removing all blogs are returned', async () => {
  const response = await api
    .get('/api/blogs')

  expect(response.body.length).toBe(initialBlogs.length+1)
})

afterAll(() => {
  server.close()
})
