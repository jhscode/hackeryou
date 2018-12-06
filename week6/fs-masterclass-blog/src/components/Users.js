import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Users extends Component {
  state = {
    users: []
  }
  async componentDidMount() {
    try {
      // Get users from api (GET /users)
      const res = await axios.get('/users')
      // Set the users in state
      this.setState({
        users: res.data.data
      })
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.state.users.map(user =>
            <li key={user._id}>
              <Link to={`/users/${user._id}`}>{user.name}</Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Users
