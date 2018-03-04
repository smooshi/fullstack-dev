import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow,  mount } from 'enzyme'
import SimpleBlog from './simpleBlog'
import { configure } from 'enzyme'

configure({ adapter: new Adapter() })

describe.only('<simpleBlog />', () => {
  it('renders title', () => {
    const blog = {
      title: 'Tpka',
      author: 'Pena',
      url: '2',
      likes: '6'
    }

    const blogComponent = shallow(<SimpleBlog blog={blog} />)
    const titleDiv = blogComponent.find('.title')

    expect(titleDiv.text()).toContain(blog.title)
  })

  it('renders author', () => {
    const blog = {
      title: 'Tpka',
      author: 'Pena',
      url: '2',
      likes: '6'
    }

    const blogComponent = shallow(<SimpleBlog blog={blog} />)
    const titleDiv = blogComponent.find('.title')

    expect(titleDiv.text()).toContain(blog.author)
  })

  it('renders likes', () => {
    const blog = {
      title: 'Tpka',
      author: 'Pena',
      url: '2',
      likes: '6'
    }

    const blogComponent = shallow(<SimpleBlog blog={blog} />)
    const titleDiv = blogComponent.find('.likes')

    expect(titleDiv.text()).toContain(blog.likes)
  })

  it('clicking the button calls event handler once', () => {
    const blog = {
      title: 'Tpka',
      author: 'Pena',
      url: '2',
      likes: '6'
    }

  const mockHandler = jest.fn()

  const blogComponent = shallow(
    <SimpleBlog
      blog={blog}
      onClick={mockHandler}
    />
  )
  //console.log(blogComponent)

  const button = blogComponent.find('button')
  button.simulate('click')
  button.simulate('click')
  expect(mockHandler.mock.calls.length).toBe(2)
})
})
