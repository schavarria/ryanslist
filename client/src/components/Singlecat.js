import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getsingleCat } from '../actions/ryansActions';
import { Link } from 'react-router-dom'

class Scat extends Component {
  componentDidMount() {
    getsingleCat(this.props.match.params.slug, this.props.match.params.id)
  }
  
  render() {
    return (
      <div>
        <h1>Single Catergory Page</h1>
        <div>{this.props.scat.map(allposts => (
              <Link to={`/${allposts.slug}/${allposts.id}`}><div> <img src={allposts.photo}/> {allposts.title}</div> </Link>
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