import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Container from '@material-ui/core/Container'

import store from './redux/store'

import Login from './components/Login'
import ListUsers from './components/users'
import ListProducts from './components/products'
import InfoUser from './components/users/infoUser'

//import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store} >
        <CssBaseline />
        
        <Container >
          <BrowserRouter>
            <Switch>
              <Route exact={true} path="/" component={ListUsers} />
              <Route exact={true} path="/login" component={Login} />
              <Route exact={true} path="/list-users" component={ListUsers} />
              <Route exact={true} path="/list-products" component={ListProducts} />

              <Route exact={true} path="/info-user/:id" component={InfoUser} />
            </Switch>
          </BrowserRouter>
        </Container>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
