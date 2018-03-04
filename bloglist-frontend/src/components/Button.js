import React from 'react'

const Button = (button) => {
  return(
    <div>
    <button onClick={button.onClick}>
      {button.nimi}
    </button>
    </div>
  )
}

export default Button
