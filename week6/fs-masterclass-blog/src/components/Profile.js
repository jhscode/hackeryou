import React, { Component } from 'react'
import axios from 'axios'

class Profile extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    this.getUser()
  }
  getUser = async () => {
    const { userId } = this.props.match.params
    const res = await axios.get(`/users/${userId}`)
    this.setState({ user: res.data.data[0] })
  }
  render() {
    return (
      <div>
        <h2>Profile</h2>
        {JSON.stringify(this.state.user, null, 3)}
      </div>
    )
  }
}

export default Profile