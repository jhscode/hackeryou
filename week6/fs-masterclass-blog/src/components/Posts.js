import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.refresh()
  }

  removePost = async id => {
    // Send a DELETE request to the API by post id
    await axios.delete(`/posts/${id}`);
    // Refresh list of posts (which shold no longer include the one we just deleted)
    this.refresh();
  }

  refresh = async () => {
    // 1. Make a GET request to '/posts'
    try {
      const res = await axios.get('/posts')
      // 2. If successful, store posts in state
      this.setState({
        posts: res.data.data
      })
    } catch (e) {
    // 3. If unsuccessful, log out the error
      console.log(e)
    }
  }
  render() {
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {this.state.posts.map(post => (
            <li>
              <Link to={`${this.props.match.url}/${post._id}`}>
                {post.title}
              </Link> - {post.user.name} - 
              <button onClick={() => this.removePost(post._id)}>Delete Post</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Posts
