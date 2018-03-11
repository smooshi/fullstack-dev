import React from 'react'
import {setNotification, removeNotification} from './../reducers/notificationReducer'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return { state: state, filter: state.filter, anecdotes: state.anecdotes };
}

const mapDispatchToProps = (dispatch) => {
  return {
    voter: (value) => {
      dispatch(setNotification(value))
    }
  }
}

class AnecdoteList extends React.Component {
  handleVote = (anecdote) => {
    console.log("KLIK")
    //e.preventDefault()
    this.props.voter({ type: 'VOTE', id: anecdote.id })
    this.props.voter({ type: 'CHANGE_STATE', content: anecdote.content})
    //let temp = setNotification(anecdote.content)
    setTimeout(() => {
      this.props.voter({type: "REMOVE_NOTF", content: ""})
    }, 5000)
  }

  render() {
    const anecdotesToShow =
    this.props.filter === "ALL" ?
    this.props.anecdotes : this.props.anecdotes.filter(a => a.content.indexOf(this.props.filter) + 1 )
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotesToShow.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() =>
                this.handleVote(anecdote)
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
