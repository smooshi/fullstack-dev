import React from 'react'
import { handleSubmit } from './../reducers/anecdoteReducer'
import { connect } from 'react-redux'


function mapStateToProps(state) {
  return { state: state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAnec: (value) => {
      dispatch(handleSubmit(value))
    }
  }
}


class AnecdoteForm extends React.Component {
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={() => this.props.createAnec(handleSubmit)}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
     )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)
