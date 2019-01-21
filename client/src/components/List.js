import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/ryansActions';
import { Link } from 'react-router-dom'

class List extends Component {
  componentDidMount() {
    getPosts(this.props.match.params.slug, this.props.match.params.id)
  }
  
  render() {
    return (
      <div>
        <h1>List</h1>
         <ul>
             {this.props.posts.map(item => (
                 <li key={item.id}> <Link to={`/post/${item.id}`}>{item.title} (Las Vegas) </Link> </li>
             ))}
         </ul>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  console.log(appState)
  return {
   posts: appState.ryansReducer.posts
  }
}

export default connect(mapStateToProps)(List)


