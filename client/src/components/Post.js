import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/ryansActions';


class Post extends Component {
  componentDidMount() {
    getPost(this.props.match.params.id)
  }
  
  render() {
    return (
      <div>
        <h1>Post</h1>
        <div>{this.props.post.title}</div>
        <div>{this.props.post.description}</div>
        <div><img src={this.props.post.photo}/></div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  console.log(appState)
  return {
   post: appState.ryansReducer.post
  }
}

export default connect(mapStateToProps)(Post)