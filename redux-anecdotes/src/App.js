import React from 'react';
import anecdoteReducer from './reducer'

class App extends React.Component {

  // componentDidMount() {
  // const { store } = this.context
  //   this.unsubscribe = store.subscribe(() =>
  //     this.forceUpdate()
  //   )
  // }

  voteBut = (id) => (e) => {
    console.log("kliiik")
    this.props.store.dispatch(
      {
        type: 'VOTE',
        data: { id }
      }
    )
  }

  render() {
    const anecdotes = this.props.store.getState()

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.voteBut(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form>
          <div><input /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default App
