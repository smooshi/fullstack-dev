import React from 'react';
import Lista from './Lista'
import Otsikko from './Otsikko'
import axios from 'axios'
import Persons from './Persons'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter:'',
      error:''
    }
  }

  componentWillMount() {
    Persons
      .getAll()
      .then(response => {
        this.setState({persons: response.data})
      })
  }

  uusiNimi = (event) => {
    event.preventDefault()

    if (this.state.persons.filter(e => e.name === this.state.newName).length > 0)  {
      if (window.confirm("Ookko varma et haluat vaihtaa sen numeron?")) {
      const persu = this.state.persons.find(p => p.name === this.state.newName)
      const uusiPersu = persu
      uusiPersu.number = this.state.newNumber

      Persons
        .update(uusiPersu.id, uusiPersu)
        .then(uusiPersu => {
          Persons
            .getAll()
            .then(response => {
              this.setState({
                persons: response.data,
                error: "Muokkasin sen!",
                newName: '',
                newNumber: ''
              })
              setTimeout(() => {
                this.setState({error: null})
              }, 5000)
            })
        })
        .catch(error => {
        alert(`Henkilö on jo valitettavasti poistettu palvelimelta`)
        this.setState({ persons: this.state.persons.filter(n => n.id !== uusiPersu.id) })
      })
      }
        // .catch(error => {
        //   alert(`muistiinpano '${note.content}' on jo valitettavasti poistettu palvelimelta`)
        //   this.setState({ notes: this.state.notes.filter(n => n.id !== id) })
        // })

      } else {
      const nameObject = {
        name: this.state.newName,
        number: this.state.newNumber,
        id: this.state.persons.length + 1
      }

      //const persons = this.state.persons.concat(nameObject)

      Persons
          .create(nameObject)
          .then(response => {
            this.setState({
              persons: this.state.persons.concat(response.data),
              error: "Lisäsin sen!",
              newName: '',
              newNumber: ''
            })
            setTimeout(() => {
            this.setState({error: null})
          }, 3000)
          })
    }
}

  muokkaaNumero = () => {

  }
  poista = (person) => {
    //console.log(person)
    if (window.confirm("Ookko varma et haluut poistaa?")) {
    Persons
      .deleter(person.person.id, person.person)
      .then(response => {
        Persons
          .getAll()
          .then(response => {
            this.setState({
              persons: response.data,
              error: "TUHOSIN SEN! BWAHAHAH!"
            })
            setTimeout(() => {
            this.setState({error: null})
          }, 3000)
          })
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

      const DeleteButton = (person) => {
        return(
          <div>
          <button onClick={ () => this.poista(person)}>
            Poista
          </button>
          </div>
        )
      }

      const Notification = ({ message }) => {
        if (message === null) {
          return null
        }
        return (
          <div className="error">
            {message}
          </div>
        )
      }

      return (
      <div>
        <Notification message={this.state.error} />
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
        {personsToShow.map(person => <div><Lista key={person.name} person={person} /> <DeleteButton person={person} /> </div>)}
      </div>
    )
  }
}

export default App
