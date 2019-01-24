import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getForm } from '../actions/ryansActions';
import { Link } from 'react-router-dom'

class Form extends Component {
  state = {
    photo:'',
    title: '',
    description:'',
    id: this.props.match.params.id
  }
    


 //handleSubmit
 handleSubmit= (e) => {
    e.preventDefault()
    getForm({
       photo: this.state.photo,
       title: this.state.title,
       description: this.state.description,
       id: this.state.id
    }).then(() => {
      this.props.history.goBack()
    })
 }


 //handleChange
  handleChange= (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input autoComplete='off' type="url" name="photo" onChange={this.handleChange} placeholder="Photo URL" value={this.state.photo}/>
          <input autoComplete='off' type="text" name="title" onChange={this.handleChange} placeholder="Title" value={this.state.title}/>
          <textarea autoComplete='off' name="description" onChange={this.handleChange} placeholder="Description" value={this.state.description}></textarea>
          <button type="submit">Submit</button> 

        </form>
        
      </div>
    )
  }
}

function mapStateToProps(appState) {
  console.log(appState)
  return {
   form: appState.ryansReducer.form
  }
}

export default connect(mapStateToProps)(Form)