import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function getCategories() {
  axios.get('/categories').then(resp => {
    store.dispatch({
      type: 'GET_CATEGORIES', 
      payload: resp.data.categories
    })
  })
}

export function getPosts(slug,id) {
  axios.get('/'+ slug + '/' + id).then(resp => {
    store.dispatch({
      type: 'GET_POSTS', 
      payload: resp.data
    })
  })
}

export function getPost(id) {
  axios.get('/post/' + id).then(resp => {
    store.dispatch({
      type: 'GET_POST', 
      payload: resp.data
    })
  })
}

export function getsingleCat(slug,id) {
  axios.get('/posts' + '/' + slug + '/' + id).then(resp => {
    store.dispatch({
      type: 'GET_SINGLECAT', 
      payload: resp.data
    })
  })
}