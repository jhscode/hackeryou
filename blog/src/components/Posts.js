import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Posts extends Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    this.refresh();
  }

  refresh = async () => {
    // 1. Make a GET request to '/posts'
    try {
      // 2. If successful,  store posts in state
      const res = await axios.get('/posts');
      this.setState({
        posts: res.data.data
      })
    } catch(e) {
      // 3. If unsuccessful, log out the error
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {this.state.posts.map(post => (
            <Link to={`/posts/${post._id}`}>{post.title}}</Link>
              -{post.user.name}
          ))}
        </ul>
      </div>
    )
  }
}

export default Posts;