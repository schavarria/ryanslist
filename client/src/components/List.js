import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/ryansActions';
import { Link } from 'react-router-dom'

import '../styles/listStyles.css'

class List extends Component {
  componentDidMount() {
    getPosts(this.props.match.params.slug, this.props.match.params.id)
  }
  
  render() {
    return (
      <div>
        <h1>Ryanslist</h1>
        <h1 className="catname">{this.props.match.params.slug}</h1>
        <input type="checkbox" name="searchtitle"/> search title
        <input type="checkbox" name="searchtitle"/> search title
        <input type="checkbox" name="searchtitle"/> search title
        <input type="checkbox" name="searchtitle"/> search title
        <input type="checkbox" name="searchtitle"/> search title
        <div className="bodyCon">
          <input className="searchbar" type="text" name="searchbar" placeholder="search" />
          <div className="topbar">
            <div className="addpostButton"> <Link to={`/form/${this.props.match.params.slug}/${this.props.match.params.id}`}>Add Post</Link></div>
            <div className="prevnext">
              <p> prev </p>
              <p className="pages"> 1-120/670 </p>
              <p> next </p>
            </div>
            <select>
              <option>list</option>
            </select>
         </div>
          <ul>
              {this.props.posts.map(item => (
                  <li key={item.id}> <Link to={`/post/${item.id}`}>{item.title} (Las Vegas) </Link> </li>
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
   posts: appState.ryansReducer.posts
  }
}

export default connect(mapStateToProps)(List)


