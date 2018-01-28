import React from 'react';
import Lista from './Lista'
import Otsikko from './Otsikko'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter:''
    }
  }

  componentWillMount() {
    console.log('will mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
  }

  uusiNimi = (event) => {
    event.preventDefault()

    if (this.state.persons.filter(e => e.name === this.state.newName).length > 0)  {
      console.log("Ayo sis!")
      } else {
      const nameObject = {
        name: this.state.newName,
        number: this.state.newNumber,
        id: this.state.persons.length + 1,
        visible: true
      }

      const persons = this.state.persons.concat(nameObject)
      this.setState({
        persons,
        newName: '',
        newNumber: ''
      })
    }
}


  toggleVisible = () => {
    this.setState({showAll: !this.state.showAll})
  }

  nimiKasittely = (event) => {
    //console.log(event.target.value)
    this.setState({ newName: event.target.value})
  }

  numeroKasittely = (event) => {
    //console.log(event.target.value)
    this.setState({ newNumber: event.target.value})
  }

  filterKasittely = (event) => {
    this.setState({ filter: event.target.value})
  }

  render() {
      const personsToShow =
      this.state.filter === undefined ?
      this.state.persons : this.state.persons.filter(person => person.name.indexOf(this.state.filter) + 1 )


      return (
      <div>
        <Otsikko title="Puhelinluettelo" />
        Rajaa: <input value ={this.state.filter} onChange={this.filterKasittely}/>
        <form onSubmit={this.uusiNimi}>
          <div>
            nimi: <input value ={this.state.newName} onChange={this.nimiKasittely}/>
          </div>
            numero: <input value ={this.state.newNumber} onChange={this.numeroKasittely}/>
          <div>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <Otsikko title="Numerot" />
        {personsToShow.map(person => <Lista key={person.name} person={person} />)}
      </div>
    )
  }
}

export default App
