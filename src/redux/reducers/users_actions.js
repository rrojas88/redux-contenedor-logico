
const USER_ACTIONS = { 
  USER_FILTER: ( text ) => {
    return {
      type: 'USER_FILTER', 
      payload: text
    }
  }
}

module.exports.USER_ACTIONS = USER_ACTIONS
