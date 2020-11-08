import React from 'react';
import { Grid } from "@material-ui/core";
import { useParams } from 'react-router-dom';

export default function ItemPage(){
    let {item} = useParams()
    console.log({item})
    return(
        <Grid container spacing={3} direction='row' align='center' >
            <Grid item xs={12}>
                <div>
                    <h1>This is ItemPage </h1>
                    <div>{item}</div>
                </div>
            </Grid>
        </Grid>
    )
}