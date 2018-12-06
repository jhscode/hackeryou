import React, { Component } from 'react';
import axios from 'axios';

class AddPost extends Component {
  state = {
    title: '',
    description: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Grab the title and description from the state
      const { title, description } = this.state;
      // Grab the user from the props
      const { user } = this.props;
      // POST /posts with title, description and user
      axios.post('/posts', { title, description, user });
      // If successful, redirect user to the posts listing page
      this.props.history.push('/posts');
    } catch(e) {
      // If error, then log it
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <h3>Add Post</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              onChange={this.handleChange}
              name="title"
              type="text"
              placeholder="Post title"
              />
          </div>
          <div>
            <textarea
              onChange={this.handleChange}
              name="description"
              type="text"
              placeholder="Post description"
            />
          </div>
          <input type="submit" value="Add Post" />
        </form>
      </div>
    )
  }
}

export default AddPost;
