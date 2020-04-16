import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { USER_ACTIONS } from '../../redux/reducers/users'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import InfoPage  from './infoUserPage'

class InfoUser extends Component {

  constructor(props){
    super(props)

    this.state = {
      id: 0
    }
  }

  async componentDidMount()  {
    await this.setState({ id: this.props.match.params.id })
    console.info( this.state)

    await this.props.USER_FILTER_BY_ID( this.state.id )
  }

  goBack = ( patth ) => {
    this.props.history.push( patth )
  }

  render(){

    return (
      <Fragment>
      {
        this.props.user === undefined
      ?
        <div>
          No se encontró el Usuario <br />
          <button type="button" 
            onClick={()=>{ this.goBack('/') } }
            >
            Volver
        </button>
        </div>
      :
        <InfoPage 
          user={ this.props.user }

          goBack={this.goBack}
          />
      }
      </Fragment>
    )
  }
}

const mapStateToProps = ( state ) => {
  //console.log("STATEeeeeee", state)
  return {
    user: state.users.user
  }
}
const mapDispatchToProps = {
  USER_FILTER_BY_ID: USER_ACTIONS.USER_FILTER_BY_ID
}

//export default InfoUser
export default withRouter( 
  connect( mapStateToProps, mapDispatchToProps )( InfoUser )
)
