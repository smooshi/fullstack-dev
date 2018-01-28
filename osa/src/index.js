import React from 'react'
import ReactDOM from 'react-dom'
import Kurssi from './Kurssi'

// Alla olevat ovat viikon 1 koodia pois kommentoituun Appiin asti
// VIIKKO 1:
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

// const App = () => {
//   const kurssi =  {
//     nimi: 'Half Stack -sovelluskehitys',
//     osat: [
//   {
//     nimi:'Reactin perusteet',
//     tehtavia: 10
//   },
//   {
//     nimi:'Tiedonvälitys propseilla',
//     tehtavia: 7
//   },
//   {
//     nimi:'Komponenttien tila',
//     tehtavia: 14
//   }]}
//
//   return (
//     <div>
//       <Otsikko name={kurssi.nimi} />
//       <Sisalto osat={kurssi.osat} />
//       <Yhteensa osat={kurssi.osat} />
//     </div>
//   )
// }

//Viikko 2
const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
    <div>
      {kurssit.map(kurssi=><Kurssi key={kurssit} kurssi={kurssi}/>)}
    </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
