import React, { Fragment } from "react"

import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles';

import TableInfo from '../tables/tableInfo'

import Autocomplete from '../inputs/autocomplete'


const useStyles = makeStyles({
  containerComponent: {
    background: 'green'
  }
});

function Page( props ){

  const classes = useStyles()
  const {
    list,

    text,
    suggestions,
    onChangeText,
    onChangeSelection,

    goTo
  } = props

  return (
    <div className={classes.containerComponent} >
      <CssBaseline />

      <h1>Listado Usuarios </h1>

      <Autocomplete 
      
        text={text}
        suggestions={suggestions}
        onChangeText={onChangeText}
        onChangeSelection={onChangeSelection}
        />

      <TableInfo 
        titles={['ID', 'Nombre', 'Nick']}
        labels={['id', 'name_', 'nick']}
        rows={list} 
        
        goTo={goTo}
      />

    </div>
  )
}

export default Page
