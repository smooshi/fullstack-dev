import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (otsikko) => {
  return(
    <h1>{otsikko.teksti}</h1>
  )
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

const Statistic = (stat) => {
  return(
    <tr>
      <td>{stat.nimi}</td><td> {stat.arvo}</td>
    </tr>
  )
}

const Statistics = (stats) => {
  if (stats.good+stats.meh+stats.bad == 0) {
    return(<p>Yhtään palautetta ei ole annettu</p>)}
    else {
  return(
    <table>
    <tbody>
    <Statistic nimi="Hyvä" arvo={stats.good} />
    <Statistic nimi="Neutraali" arvo={stats.meh} />
    <Statistic nimi="Huono" arvo={stats.bad} />
    <Statistic nimi="Keskiarvo" arvo={(stats.good - stats.bad) / (stats.good + stats.bad + stats.meh)} />
    <Statistic nimi="Positiivisia" arvo={stats.good / (stats.good + stats.bad + stats.meh) * 100} />
    </tbody>
    </table>
  )}
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      meh: 0,
      bad: 0
    }
  }

  asetaArvoon = (nimi, arvo) => {
    let newState = {}
    newState[nimi] = arvo
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <Otsikko teksti="Anna palautetta" />
        <div>
          <Button onClick={() => this.asetaArvoon("good", this.state.good+1)} nimi="Hyvä"/>
          <Button onClick={() => this.asetaArvoon("meh", this.state.meh+1)} nimi="Neutraali"/>
          <Button onClick={() => this.asetaArvoon("bad", this.state.bad+1)} nimi="Huono"/>

          </div>
        <Otsikko teksti="Statistiikka" />
          <Statistics good={this.state.good } meh={this.state.meh} bad={this.state.bad}/>
              </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
