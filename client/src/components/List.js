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
        <div className="listCon">
          <div className="listleftCon">
            <input type="checkbox" name="searchtitle"/> search by title <br/>
            <input type="checkbox" name="searchtitle"/> has image<br/>
            <input type="checkbox" name="searchtitle"/> posted today<br/>
            <input type="checkbox" name="searchtitle"/> bundle duplicates<br/>
            <input type="checkbox" name="searchtitle"/> include nearby areas<br/>
            <p>miles from zip</p>
            <div className="zipCon">
              <input className="miles" type="text" name="miles" placeholder="miles"/>
              <input className="zip" type="text" name="zip" placeholder="from zip"/>
            </div>
          </div> 
          <div className="bodyCon">
            <input className="listsearchbar" type="text" name="searchbar" placeholder="search" />
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


