import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return { state: state };
}

class App extends React.Component {
  render() {
    //console.log("in app"+this.props.state.anecdotes)
    //const anecdotes = this.props.store.getState()
    //const notifications = this.props.store.getState()
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Filter />
      <Notification />
        <AnecdoteList />
        <AnecdoteForm />
        //<Filter store={this.props.state} />
        //<Notification store={this.props.state}/>
        //<AnecdoteList store={this.props.state} />
        //<AnecdoteForm store={this.props.state} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
