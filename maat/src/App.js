import React from 'react';
import axios from 'axios'
import Otsikko from './Otsikko'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      maat: [],
      filter:''
    }
  }

  componentWillMount() {
    console.log('will mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ maat: response.data })
      })
  }

  filterKasittely = (event) => {
    this.setState({ filter: event.target.value})
  }

  klik = (maa) => {
    this.setState({ filter: maa.name})
  }

  render() {
       const maatToShow =
       this.state.filter === undefined ?
       this.state.maat : this.state.maat.filter(maa => maa.name.indexOf(this.state.filter) + 1 )

       const Lista = ({maa}) => {
           return(
             <div onClick= {() => this.klik(maa)}>
             <p>{maa.name}</p>
             </div>
           )
         }

       if (maatToShow.length == 1) {
         return(
         <div>
         <Otsikko title="Rajaus" />
         Rajaa: <input value ={this.state.filter} onChange={this.filterKasittely}/>

         <Otsikko title={maatToShow[0].name} />
         <p>Capital: {maatToShow[0].capital}</p>
         <p>Pop: {maatToShow[0].population}</p>
         <img src={maatToShow[0].flag} />
         </div>
       )
     } else if (maatToShow.length < 10) {
        return (
        <div>
          <Otsikko title="Rajaus" />
          Rajaa: <input value ={this.state.filter} onChange={this.filterKasittely}/>

          <Otsikko title="Maat" />
          {maatToShow.map(maa => <Lista key={maa.name} maa={maa} />
          )}

        </div>
        )
      } else {
        return (
        <div>
          <Otsikko title="Rajaus" />
          Rajaa: <input value ={this.state.filter} onChange={this.filterKasittely}/>

          <Otsikko title="Maat" />
          <p> Too many to show</p>

        </div>
        )
      }
  }
}

export default App
