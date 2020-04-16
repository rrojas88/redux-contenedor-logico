import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

  rowBorder: {
    border: '1px solid gray'
  },
  rowLink: {
    border: '1px solid gray',
    color: 'green',
    cursor: 'pointer',
    fontWeight: 'bold'
  },

  error: {
    color: 'red'
  }
});

export default function MiTabla( props ) {

  const classes = useStyles();

  const { 
    rows,
    labels,
    titles,

    goTo 
  } = props

  return (
    <Fragment>
    {
      ( labels.length !== titles.length )
    ?
      <div className={classes.error}>
        La cantidad de Títulos no coincide con la cantidad de columnas a mostrar en cada registro
      </div>
    :
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
            {
              titles.map( (item, index ) => {
                return <TableCell align="center" key={index}  className={classes.rowBorder} > 
                  { item } 
                </TableCell>
              })
            }
            </TableRow>
          </TableHead>


          <TableBody>
          {
            rows.map( (row, index) => {

              return (
                <TableRow key={index}>
                  {
                    labels.map( (keyRow, j ) => { 
                      return (
                        <Fragment  key={j} >
                        {
                          keyRow !== 'id'
                        ?
                          <TableCell component="th" scope="row" key={j} 
                            className={classes.rowBorder} >
                            { row[ keyRow ] }
                          </TableCell>
                        :
                          <TableCell component="th" scope="row" key={j} 
                            className={classes.rowLink} 
                            onClick={ () => { goTo(`/info-user/${row[ keyRow ]}`) }}
                            >
                            { row[ keyRow ] }
                          </TableCell>
                        }
                        </Fragment>                        
                      )
                    })
                  }
                </TableRow>
              )
            })
          }
          </TableBody>
        </Table>
      </TableContainer>
    }
    </Fragment>
  );
}