import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoFormUI from './components/TodoFormUI'
import Navbar from './components/Nav'
import Display from './components/Display'
import { Grid } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode> 
      <Grid container spacing={3}>
        <Grid item xs={12} style={{padding:'0'}}>
          <Navbar />
        </Grid>
        <Grid item xs={12} sm={5} style={{background:'yellow'}}>
          <TodoFormUI />
        </Grid>
        <Grid item xs={12} sm={7} style={{background:'green', padding:'20px'}}>
          <Display/>
        </Grid>
      </Grid>
  </React.StrictMode>,
  document.getElementById('root')
);



