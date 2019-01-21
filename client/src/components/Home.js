import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/ryansActions';
import { Link } from 'react-router-dom'

class Home extends Component {
  componentDidMount() {
    getCategories()
  }
  
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div>
          {this.props.categories.map(items=> (
          <div>
           <Link to={`/${items.slug}/${items.id}`}> <h3>{items.name}</h3></Link>
            <div>{items.subcat.map(allsubs => (
              <Link to={`/${allsubs.slug}/${allsubs.id}`}> <div>{allsubs.name}</div> </Link>
            ))}
            </div>
          </div>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  console.log(appState)
  return {
   categories: appState.ryansReducer.categories
  }
}

export default connect(mapStateToProps)(Home)


