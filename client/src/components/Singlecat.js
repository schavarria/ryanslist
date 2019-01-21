import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getsingleCat } from '../actions/ryansActions';
import { Link } from 'react-router-dom'

class Scat extends Component {
  componentDidMount() {
    getsingleCat(this.props.match.params.id)
  }
  
  render() {
    return (
      <div>
        <h1>Single Category Page</h1>
        <div>{this.props.posts.map(allposts => (
              <Link to={`/${allposts.slug}/${allposts.id}`}> <div>{allposts.title}</div> </Link>
            ))}
            </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  console.log(appState)
  return {
   scat: appState.ryansReducer.scat
  }
}

export default connect(mapStateToProps)(Scat)