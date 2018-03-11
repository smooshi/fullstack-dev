import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return { notifications: state.notifications };
}
class Notification extends React.Component {
  render() {
    const notification = this.props.notifications
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    //console.log("NOT E ",notification)
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
}

//const ConnectedNotification = connect()(Notification)

export default connect(mapStateToProps)(Notification)
