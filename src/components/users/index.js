import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { USER_ACTIONS } from '../../redux/reducers/users'

import Page from './page'

class ListUsers extends Component {

  constructor(props){
    super(props)

    this.state = {
      text: ''
    }

    this.onChangeText = this.onChangeText.bind(this)
    this.onChangeSelection = this.onChangeSelection.bind(this)
  }

  onChangeText = ( text ) => {
    this.setState( { text })

    this.props.USER_FILTER(text);
  }

  onChangeSelection = ( text ) => {
    this.setState( { text })
  }

  goTo = ( path ) => {
    this.props.history.push( path )
  }


  render(){
    //console.log("Users ******** ", this.props)
    const { list } = this.props
    const { 
      text
    } = this.state

    return <Page  
        list={list}

        text={text}
        suggestions={list}
        onChangeText={this.onChangeText}
        onChangeSelection={this.onChangeSelection}

        goTo={ this.goTo }
      />
  }
}

const mapStateToProps = ( state ) => {
  return {
    list: state.users.list
  }
}

const mapDispatchToProps = {
    USER_FILTER: USER_ACTIONS.USER_FILTER
}/*
const mapDispatchToProps = ( dispatch ) => {
  return {
    USER_FILTER: text => dispatch( USER_ACTIONS.USER_FILTER(text) )
  }
}*/

export default withRouter( 
   connect( mapStateToProps, mapDispatchToProps )( ListUsers )
)
