const listHelper = require('../utils/list_helper')

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  const listWithTwoBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Alyssa Edwards Quotes',
      author: 'Alyssa Edwards',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 9,
      __v: 0
    }
  ]

  test('dummy is called', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
  })

  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.likes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('when list has two blog equals the likes of that', () => {
    const result = listHelper.likes(listWithTwoBlog)
    expect(result).toBe(14)
  })

  test('when list has two blogs best to be Alyssa Edwards', () => {
    const result = listHelper.favoriteBlog(listWithTwoBlog)
    expect(result).toEqual(
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Alyssa Edwards Quotes',
        author: 'Alyssa Edwards',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 9,
        __v: 0
      }
    )
  })

})

describe('favourite blog', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  const listWithTwoBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Alyssa Edwards Quotes',
      author: 'Alyssa Edwards',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 9,
      __v: 0
    }
  ]
  test('when list has one blogs best to be Alyssa Edwards', () => {
    const result = listHelper.favoriteBlog(listWithOneBlog)
    expect(result).toEqual(
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    )
  })
  test('when list has two blogs best to be Alyssa Edwards', () => {
    const result = listHelper.favoriteBlog(listWithTwoBlog)
    expect(result).toEqual(
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Alyssa Edwards Quotes',
        author: 'Alyssa Edwards',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 9,
        __v: 0
      }
    )
  })

})

describe('most blogs', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  const listWithThreeBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Alyssa Edwards Quotes',
      author: 'Alyssa Edwards',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 9,
      __v: 0
    },
    {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
  ]
  test('when list has one blogs best to be Dijkstra', () => {
    const result = listHelper.mostBlogs(listWithOneBlog)
    expect(result).toEqual({
      name: 'Edsger W. Dijkstra',
      count: 1
    })
  })

  test('when list has three blogs best to be Dijkstra', () => {
    const result = listHelper.mostBlogs(listWithThreeBlog)
    expect(result).toEqual({
      name: 'Edsger W. Dijkstra',
      count: 2
    })
  })

})


describe('most likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  const listWithThreeBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Alyssa Edwards Quotes',
      author: 'Alyssa Edwards',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 9,
      __v: 0
    },
    {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
  ]
  test('when list has one blogs best to be Dijkstra', () => {
    const result = listHelper.mostLikes(listWithOneBlog)
    expect(result).toEqual({
      name: 'Edsger W. Dijkstra',
      likes: 5
    })
  })

  test('when list has three blogs best to be Dijkstra', () => {
    const result = listHelper.mostLikes(listWithThreeBlog)
    expect(result).toEqual({
      name: 'Edsger W. Dijkstra',
      likes: 10
    })
  })

})
