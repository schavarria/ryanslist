import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions/ryansActions';

import '../styles/postStyles.css'


class Post extends Component {
  componentDidMount() {
    getPost(this.props.match.params.id)
  }
  
  render() {
    return (
      <div>
        <div className="prevnextCon">
          <p> prev </p>
          <p> next </p>
        </div>
        <div className="postCon">         
          <div><h2>{this.props.post.title}</h2></div>
          <button className="replybutton">reply</button>
          <div>{this.props.post.description}</div>
          <div><img className="photo" src={this.props.post.photo}/></div>
          </div>
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