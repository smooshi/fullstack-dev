import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

const initialState = {
  hy: 0,
  ne: 0,
  hu: 0
}

const unicafeReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'hy':
      return state.hy + 1
    case 'ne':
      return state.ne + 1
    case 'hu':
      return state.hu + 1
    case 'ZERO':
      return state
  }
  return state
}

export default unicafeReducer
