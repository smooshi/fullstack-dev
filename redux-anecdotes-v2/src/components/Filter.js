import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return { state: state };
}

class Filter extends React.Component {
  handleChange = (event) => {
    // input-kentän arvo muuttujassa event.target.value
    this.props.state.dispatch({ type:"SET_FILTER", filter: event.target.value})
  }

  render() {
    //console.log("FILTER ", this.props.store, this.props.state)
    const filter = this.props.state.filter
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Filter)
