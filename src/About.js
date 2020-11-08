import React from 'react';
import { Grid } from "@material-ui/core";

export default  function About(){
    return(
        <Grid container spacing={3} direction='row' align='center' >
            <Grid item xs={12}>
                <div>This is About Page</div>
            </Grid>
        </Grid>
    )
}