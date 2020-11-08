import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {deleteTodo} from '../redux/actions';
import { connect } from 'react-redux';
import ItemPage from './ItemPage';
import {browserHistory, Redirect, useHistory} from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import { Link } from '@material-ui/core';
import PropTypes from 'prop-types'

function Item ({item, deleteTodo}){
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
    // let id = item.id
    // let history = useHistory()
    // const handlClick = ({item}) => {
    //     history.push(`/${item}`)
    // }

    return (
        <div>
        
        <TableRow 
        // hover
        // // onClick={(event) => handleClick(event, row.description)}
        // role="checkbox"
        // aria-checked={isItemSelected}
        // tabIndex={-1}
        key={item.id}
        // selected={isItemSelected}
        // onClick={(e)=>window.location.href='/item'}
        
        >
        
        <TableCell padding="checkbox">
        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        </TableCell>
        
        
        <TableCell>
            {item.content.description}
        </TableCell>
        
        <TableCell>{item.content.category}</TableCell>
        <TableCell>
        <Button onClick={()=> deleteTodo(item.id)}>Delete</Button>
        </TableCell>
    </TableRow>
    </div>
    )}

const mapStateToProps = (state) => {
    console.log(state)
    return state.todos
}  

export default connect(
    mapStateToProps,
    {deleteTodo}
)(Item)
// export default Item