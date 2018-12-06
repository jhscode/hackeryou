import React, { Component } from 'react'
import axios from 'axios'

import Comment from './Comment';

class Post extends Component {
  state = {
    post: null
  }
  componentDidMount() {
    this.getPost()
  }
  getPost = async () => {
    const { postId } = this.props.match.params
    const res = await axios.get(`/posts/${postId}`)
    this.setState({
      post: res.data.data[0]
    })
  }
  render() {
    if(!this.state.post) return <p>Loading...</p>
    return (
      <div>
        <h2>Post Details</h2>
        <h3>{this.state.post.title}</h3>
        <p>{this.state.post.description}</p>
        {this.state.post.comments.map(comment => 
        <Comment {...comment} />)}
      </div>
    )
  }
}

export default Post
