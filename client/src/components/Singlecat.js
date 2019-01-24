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
        <h1>{this.props.match.params.slug}</h1>
        <div>{this.props.scat.map(allposts => (
              <Link key={allposts.id} to={`/${allposts.slug}/${allposts.id}`}><div> {allposts.title}</div> </Link>
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