
import deepFreeze from 'deep-freeze'
import unicafeReducer from './unicafeReducer'

describe('unicafe reducer', () => {
  const initialState = {
    hy: 0,
    ne: 0,
    hu: 0
  }

  it('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = unicafeReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  it('good is incremented', () => {
    const action = {
      type: 'hy'
    }
    const state = initialState

    deepFreeze(state)
    const newState = unicafeReducer(state, action)
    expect(newState).toEqual(1)
  })
})
