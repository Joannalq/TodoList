import React from 'react';
import { Button, Grid } from "@material-ui/core";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function ItemPage(props){
    console.log(props)
    let {id} = useParams()
    let items = props.items
    let targetItem = items.filter(item => item.id == id)
    console.log(targetItem)
    
    return(
        <Grid container spacing={3} direction='row' align='left' >
            <Grid item xs={1}></Grid>
            <Grid item xs={11}>
                <div>
                    <h1>This is ItemPage </h1>
                    <div>
                        {
                            targetItem.map((item)=>{
                                return (
                                    <div>
                                        <div><b>Id:</b> {item.id}</div>
                                        <div> <b>Description : </b>{item.content.description}</div>
                                        <div> <b>Category:</b> {item.content.category}</div>
                                        <div><b>Content:</b> {item.content.content}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </div>
            </Grid>
            <Grid item xs={12}>
                <Link to='/'>
                    <Button size='small' variant="contained" style={{background:'#4285f4'}} >
                        Back
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return state.todos
}  

export default connect(
    mapStateToProps,
    null
)(ItemPage)