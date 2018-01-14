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
    <p>{osa.name} {osa.tehtavat}</p>
    </div>
  )
}

const Sisalto = (osat) => {
    return(
      <div>
      <Osa name= {osat.osa1} tehtavat= {osat.tehtavat1} />
      <Osa name= {osat.osa2} tehtavat= {osat.tehtavat2} />
      <Osa name= {osat.osa3} tehtavat= {osat.tehtavat3} />
      </div>
    )
}

const Yhteensa = (yht) => {
  return(
    <div>
    <p>Yhteensä {yht.yht} tehtävää</p>
    </div>
  )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko name={kurssi} />
      <Sisalto osa1={osa1} tehtavat1={tehtavia1} osa2={osa2} tehtavat2={tehtavia2} osa3={osa3} tehtavat3={tehtavia3}/>
      <Yhteensa yht={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
