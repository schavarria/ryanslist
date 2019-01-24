import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/ryansActions';
import { Link } from 'react-router-dom'

import '../styles/homeStyles.css'

class Home extends Component {
  componentDidMount() {
    getCategories()
  }
  
  render() {
    return (
      <div className='superCon'>
        <div className='leftColumn'>
          <h1>Ryanslist</h1>
          <p>my account</p>
          <input type="text" name="homesearchbar" placeholder="search ryanslist"/>
          <p>event calendar</p>
          <img src="https://files.slack.com/files-pri/T9BFJRRUG-FFMEXVCTV/screen_shot_2019-01-23_at_4.09.58_pm.png"/>
          <p>help, faq, abuse, legal</p>
          <p>avoid scams and fraud</p>
          <p>personal safety tips</p>
          <p>terms of use</p>
          <p>privacy policy</p>
          <p>system status</p>
          <p>about ryanslist</p>
          <p>ryanslist is hiring in lv</p>
          <p>ryanslist open source</p>
          <p>ryanslist blog</p>
          <p>best-of-ryanslist</p>
          <p>ryanslist tv</p>
          <p>"ryanslist joe"</p>
          <p>ryan connects</p>
          
        </div>
        <div className="mainCon" >
          <div className="lvTitle"><h2 className="lasvegas">Las Vegas</h2></div>
          <div id="catCon">
            {this.props.categories.map(items=> (
            <div key={items.id}>
            <Link to={`/posts/${items.slug}/${items.id}`}> <h3 className="catName">{items.name}</h3></Link>
              <div>{items.subcat.map(allsubs => (
                <Link key={allsubs.id} to={`/${allsubs.slug}/${allsubs.id}`}> <div className="allsubs">{allsubs.name}</div> </Link>
              ))}
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className='rightColumn'>
        <select>
          <option>english</option>
        </select>
        <p>nearby rl</p>
        <p>bakersfield</p>
        <p>elko</p>
        <p>flagstaff</p>
        <p>fresno</p>
        <p>gold country</p>
        <p>hanford</p>
        <p>imperial co</p>
        <p>inland impire</p>
        <p>los angeles</p>
        <p>merced</p>
        <p>modesto</p>
        <p>mohave co </p>
        <p>oragne co</p>
        <p>palm springs</p>
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


