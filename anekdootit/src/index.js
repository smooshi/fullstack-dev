import React from 'react'
import ReactDOM from 'react-dom'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Button = (button) => {
  return(
    <div>
    <button onClick={button.onClick}>
      {button.nimi}
    </button>
    </div>
  )
}

const Anecdote = (anecdote) => {
  return(
    <div>
    <p>{anecdote.text}</p>
    </div>
  )
}

const Title = (title) => {
  return(
    <div>
    <h1> {title.text}</h1>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0,0,0,0,0],
      max: 0
    }
  }

  randomaa = () => {
    let newState = getRandomInt(0,4)
    this.setState({selected: newState})
  }

  votee = () => {
    let newVotes = this.state.votes
    newVotes[this.state.selected] = newVotes[this.state.selected]+1
    this.setState({votes: newVotes})
    var indexOfMaxValue = this.state.votes.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    this.setState({max: indexOfMaxValue})
  }

  render() {
    return (
      <div>
      <Title text="Anecdotes" />
      <Anecdote text={this.props.anecdotes[this.state.selected]} />
      <Button nimi="next anecdote" onClick={this.randomaa} />
      <Button nimi="vote" onClick={this.votee} />
      <Title text="Anecdote with most votes" />
      <Anecdote text={this.props.anecdotes[this.state.max]}/>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
