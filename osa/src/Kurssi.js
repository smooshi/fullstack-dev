import React from 'react'

const Otsikko = (kurssi) => {
    return(
      <div>
      <h1>Nimi: {kurssi.name}</h1>
      </div>
    )
}

const Lista = ({osa}) => {
  return(
    <p>{osa.nimi} {osa.tehtavia}</p>
  )
}

const Yht = ({osat}) => {
  var total = osat.reduce((prev,next) => prev + next.tehtavia,0);
  return(
    <p> Yhteensä {total} tehtävää</p>
  )
}

const Kurssi = ({kurssi}) => {
  return(
    <div>
    <div>
      <Otsikko name={kurssi.nimi} />
      {kurssi.osat.map(osa=><Lista key={kurssi.osat.id} osa={osa}/>)}
    </div>
    <div>
      <Yht osat={kurssi.osat} />
    </div>
    </div>
  )
}

export default Kurssi
