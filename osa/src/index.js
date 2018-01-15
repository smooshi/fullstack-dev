import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (kurssi) => {
    return(
      <div>
      <h1>Nimi: {kurssi.name}</h1>
      </div>
    )
}

const Osa = (osa) => {
  return(
    <div>
    <p>{osa.nimi} {osa.tehtavia}</p>
    </div>
  )
}

const Sisalto = (osat) => {
    return(
      <div>
      <Osa nimi = {osat.osat[0].nimi} tehtavia = {osat.osat[0].tehtavia}/>
      <Osa nimi = {osat.osat[1].nimi} tehtavia = {osat.osat[1].tehtavia} />
      <Osa nimi = {osat.osat[2].nimi} tehtavia = {osat.osat[2].tehtavia} />
      </div>
    )
}

const Yhteensa = (osat) => {
  return(
    <div>
    <p>Yhteensä {osat.osat[0].tehtavia + osat.osat[1].tehtavia + osat.osat[2].tehtavia} tehtävää</p>
    </div>
  )
}

const App = () => {
  const kurssi =  {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
  {
    nimi:'Reactin perusteet',
    tehtavia: 10
  },
  {
    nimi:'Tiedonvälitys propseilla',
    tehtavia: 7
  },
  {
    nimi:'Komponenttien tila',
    tehtavia: 14
  }]}

  return (
    <div>
      <Otsikko name={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
