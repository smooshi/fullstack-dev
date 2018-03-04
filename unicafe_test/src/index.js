import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const Statistiikka = ({pisteet}) => {
  const palautteita = pisteet.hy + pisteet.ne + pisteet.hu

  if (palautteita === 0) {
    return (
      <div>
        <h2>stataistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  const ka = () => {
    const sum = pisteet.hy - pisteet.hu
    return (palautteita === 0 ? 0 : sum / palautteita).toFixed(1)
  }

  const pos = () =>
    (palautteita === 0 ? 0 : 100 * pisteet.hy / palautteita).toFixed(1)

  return (
    <div>
      <h2>statistiikka</h2>
      <table>

        <tr>
          <td>hyvä</td>
          <td>{pisteet['hy']}</td>
        </tr>
        <tr>
          <td>neutraali</td>
          <td>{pisteet['ne']}</td>
        </tr>
        <tr>
          <td>huono</td>
          <td>{pisteet['hu']}</td>
        </tr>
        <tr>
          <td>keskiarvo</td>
          <td>{ka()}</td>
        </tr>
        <tr>
          <td>positiivisia</td>
          <td>{pos()} %</td>
        </tr>

      </table>
    </div >
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hu: 0,
      ne: 0,
      hy: 0,
    }
  }

  klik = (nappi) => () => {
    this.setState({ [nappi]: this.state[nappi] + 1  })
  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('hy')}>hyvä</button>
        <button onClick={this.klik('ne')}>neutraali</button>
        <button onClick={this.klik('hu')}>huono</button>
        <Statistiikka pisteet={this.state} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
