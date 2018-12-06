import React, { Component } from 'react'
import axios from 'axios'

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
    return (
      <div>
        <h2>Post Details</h2>
        {JSON.stringify(this.state.post, null, 3)}
      </div>
    )
  }
}

export default Post
