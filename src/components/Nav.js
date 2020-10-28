
import React, { Component } from 'react';
import {AppBar, Tabs,Tab } from '@material-ui/core'
const Nav = () =>{
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <div>
            <AppBar position="static" style={{ background: '#81c7e9' }}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" textColor='second'> 
                <Tab label="todo"  />
                <Tab label="about" />
                </Tabs>
            </AppBar>
        </div>
    )
}

export default Nav