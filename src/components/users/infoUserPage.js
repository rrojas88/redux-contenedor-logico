import React from 'react'

import AppBar from '@material-ui/core/AppBar'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { CardActions } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'

import { purple } from '@material-ui/core/colors';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  // boton Purpura
  margin: {
    margin: '10px'
  },
});



const ColorButton = withStyles((theme) => ({
  root: {
    //color: '#ccc333',
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);


const InfoPage = ( props ) => {

    //console.log( "Finnnnnn", props )
    //console.log( "THEMEEEEEEEEEE", theme );
    const { 
      name_,
      id,
      nick
    } = props.user

    const classes = useStyles()

    return (
      <Card className={classes.root} color="primary">
        <CardContent>
          <AppBar position="static">
            
              <Typography className={classes.title} color="secondary" gutterBottom>
                Informacion
              </Typography>
              <Typography variant="h5" color="inherit">
                { name_ }
              </Typography>

          </AppBar>

          <Typography className={classes.pos} color="textSecondary">
            ID = { id }
          </Typography>
          <Typography variant="body2" component="p">
            Nick: { nick }
          </Typography>
        </CardContent>

        <CardActions>
          <Button color="primary" 
            onClick={()=>{props.goBack('/') } }
            >
            Volver
          </Button>
          
          <br />
          <p></p>

          <Container>
            <Button variant="contained">Default 1</Button>
            <Button >Default 2</Button>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary"> Secondary </Button>
            <Button variant="contained" disabled>
              Disabled
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
              Link
            </Button>
          </Container>

          <br />
          <p></p>
          <Container>

            <Button variant="outlined">Default</Button>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="outlined" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
            <Button variant="outlined" color="primary" href="#outlined-buttons">
              Link
            </Button>
          </Container>

          <br />
          <p></p>

          <Container>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
              <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
              <AlarmIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
          </Container>

          <br />
          <p></p>

          <Container>
            <ColorButton variant="contained" color="primary" 
              className={classes.margin}>
              Boton Purpura
            </ColorButton>
          </Container>

        </CardActions>
      </Card>
    )
}

export default InfoPage
