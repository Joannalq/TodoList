import React from 'react';
import TodoFormUI from './components/TodoFormUI';
import Nav from './components/Nav'
import Display from './components/Display'
import { Grid } from '@material-ui/core';
import Todo from './components/Todo'

export default function TodoApp() {
    return (
        <Grid container spacing={3} direction='row' align='center' >
        <Grid item xs={12}>
          <Nav />
        </Grid>
        <Grid item xs={5}>
          <TodoFormUI />
          <Todo />
        </Grid>
        <Grid item xs={7}>
          <Display/>
        </Grid>
      </Grid>
    );
}