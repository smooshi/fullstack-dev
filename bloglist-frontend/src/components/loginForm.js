import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          käyttäjätunnus
          <input
            value={props.username}
            onChange={props.handleChange}
            name="username"
          />
        </div>
        <div>
          salasana
          <input
            value={props.password}
            onChange={props.handleChange}
            name="password"
          />
        </div>
        <div>
        <button type="submit">kirjaudu</button>
        </div>
      </form>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm
