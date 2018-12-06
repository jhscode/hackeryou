import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Users from './components/Users'
import Posts from './components/Posts'
import Profile from './components/Profile'
import Post from './components/Post'
class App extends Component {
  state = {
    user: null
  }

  login = async () => {
    // Get all users
    const res = await axios.get('/users')
    // Return first user from array
    return res.data.data[0]
  }

  async componentDidMount() {
    // Call login method
    const user = await this.login()
    // Set first user into state
    this.setState({ user })
  }

  render() {
    // If there's no user, display 'Not logged in.'
    if (this.state.user) {
      return (
        <Router>
          <div>
            <h1>Hello {this.state.user.name} 👋!</h1>
            <p>To see a list of users,
              <Link to='/users'>
                 click here.
              </Link>
            </p>
            <p>To see a list of posts,
              <Link to='/posts'>
                click here.
              </Link>
            </p>
            <Route exact path="/users" component={Users} />
            <Route path="/users/:userId" component={Profile} />
            <Route path="/posts" component={Posts} />
            <Route path="/posts/:postId" component={Post} />
          </div>
        </Router>
      )
    }
    return (
      <h1>Not logged in</h1>
    );
  }
}

export default App;
