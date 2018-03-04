import anecdoteReducer from './reducer'
import { createStore } from 'redux';
import deepFreeze from 'deep-freeze'

describe('reducer', () => {
  const initStore = createStore(anecdoteReducer)
  const initialState = initStore.getState()

  it('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = anecdoteReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  it('votes should increment when voting', () => {

    const state = initialState

    const action = {
      type: 'VOTE',
      data: {id: initialState[0].id}
    }

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)

    expect(newState).toContainEqual({
      content: initialState[0].content,
      votes: initialState[0].votes+1,
      id: initialState[0].id
    })
  })

  it('votes should increment when voting', () => {

    const state = initialState

    const action = {
      type: 'VOTE',
      data: {id: initialState[1].id}
    }

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)

    expect(newState).toContainEqual({
      content: initialState[1].content,
      votes: initialState[1].votes+1,
      id: initialState[1].id
    })
  })
})
