import {TextField,Container,Grid,Select, InputLabel} from '@material-ui/core'
import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";


class TodoFormUI extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            description: props.items.description,
            category:props.items.category,
            content:props.items.content
        }
    }

    handleDescription = (event) => {
        this.setState({
            description:event.target.value,
        })
    }

    handleContent = (event) => {
        this.setState({
            content :event.target.value,
        })
    }

    handleChange = (event) => {
        this.setState ({category:event.target.value})
    }

    addTodo = () => {
        this.props.addTodo(this.state)
        this.setState({
            description:'',
            category:'',
            content:''
        })
    }
    render(){
        return (
            <Container maxWidth="sm">
                <form>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Grid container spacing={1} alignItems='center'>
                                <Grid item xs={4}>
                                    <InputLabel>Description</InputLabel>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField required
                                        fullWidth
                                        label="Description:"
                                        size="small"
                                        variant="outlined"
                                        value ={this.state.description}
                                        onChange = {this.handleDescription}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1} alignItems='center'>
                                <Grid item xs={4}>
                                    <InputLabel >category</InputLabel>
                                </Grid>
                                <Grid item xs={8}>
                                    <Select
                                        native
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select-outlined"
                                        value={this.state.category}
                                        onChange={this.handleChange}
                                        style = {{border: '0.5px solid'}}
                                        >
                                        <option aria-label="None" value="" />
                                        <option value={'CSS'}>CSS</option>
                                        <option value={'HTML'}>HTML</option>
                                        <option value={'JAVA'}>JAVA</option>
                                    </Select>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} justify='flex-end'>
                            <Grid container spacing={3} alignItems='center'>
                                <Grid item xs={4} >
                                    <InputLabel>Content</InputLabel>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                    fullWidth
                                    label="Content:"
                                    size="small"
                                    variant="outlined"
                                    value = {this.state.content}
                                    onChange = {this.handleContent}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Button fullWidth variant="contained" onClick={this.addTodo} style={{background:'#4285f4'}}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>    
                </form>
            </Container>
    
        )
    }
}

const mapStateToProps = (state) => {
    return state.todos
}

// dispatch the action
export default connect(
    mapStateToProps,
    {addTodo}
)(TodoFormUI);
