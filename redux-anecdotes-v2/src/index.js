import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import store from './store'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notifications: notificationReducer,
  filter: filterReducer
})

const store = createStore(reducer)
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
