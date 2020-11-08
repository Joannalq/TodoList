import React from 'react';
import TodoFormUI from './components/TodoFormUI';
import Display from './components/Display';
import { Grid } from '@material-ui/core';

export default function TodoApp() {
    return (
        <Grid container spacing={3} direction='row' align='center' >
          <Grid item xs={5}>
            <TodoFormUI />
          </Grid>
          <Grid item xs={7}>
            <Display/>
          </Grid>
        </Grid>
    );
}