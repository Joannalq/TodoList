import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import Nav from './components/Nav'
import Display from './components/Display'
import { Grid } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    
      
      <Grid container spacing={3} direction='row' align='center' >
        <Grid item xs={12}>
          <Nav />
        </Grid>
        <Grid item xs={5}>
          <TodoList />
        </Grid>
        <Grid item xs={7}>
          <Display/>
        </Grid>
      </Grid>
  </React.StrictMode>,
  document.getElementById('root')
);



