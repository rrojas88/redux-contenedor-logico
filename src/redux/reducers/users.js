import { data } from '../../data/data'


/// ========== ACTIONs ============
export const USER_ACTIONS = { 
  USER_FILTER: ( text ) => {
    return {
      type: 'USER_FILTER', 
      payload: text
    }
  },
  USER_FILTER_BY_ID: ( id ) => {
    return {
      type: 'USER_FILTER_BY_ID', 
      payload: id
    }
  }
}

/// ========== FIN ACTIONs ============



const STATE_INIT = {
  list: data.LIST_USERS,
  user: {}
}

function reducer( state= STATE_INIT, { type, payload }){

  //console.info(USER_ACTIONS.USER_FILTER.name)
  //console.info(USER_ACTIONS.USER_FILTER_BY_ID.name)
  //console.info("PAyloaddddddd: ", payload)

  switch( type ){
  
    case USER_ACTIONS.USER_FILTER.name:
      
      const payload_ = payload.toLowerCase()
      //const regex = new RegExp(`${payload}`, 'gi')
      //const newList = data.LIST_USERS.filter( user => regex.test( user.name_ ) )
      const newList = data.LIST_USERS.filter( user => {
        const name_ = user.name_.toLowerCase()
        if( name_.indexOf( payload_ ) !== -1 ){
          return user
        }
      })
      return Object.assign({}, state, {
        list: newList
      })


    case USER_ACTIONS.USER_FILTER_BY_ID.name:
      const row = data.LIST_USERS.filter( (user) => {
        if( user.id === +payload ){
          return user
        } 
      })
      const user = row[ 0 ]
      return Object.assign({}, state, {
        user
      })


    default: 
      return state
  }
}

export default reducer
