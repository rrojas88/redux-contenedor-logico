import  { createStore, combineReducers } from 'redux'

import users from './reducers/users'

import productos from './reducers/products'

//console.log( "userReducers",  userReducers)

const reducer = combineReducers({
  users: users,
  //users: users.user,
  list_products: productos
})

const store = createStore( reducer )

export default store 
