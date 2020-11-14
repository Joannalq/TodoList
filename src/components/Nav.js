
import React from 'react';
import {AppBar, Toolbar, ListItem, ListItemText, List, makeStyles } from '@material-ui/core'
import {Link} from 'react-router-dom'

const navLinks = [
    {title:'TODO', path:'/'},
    {title:'ABOUT', path:'/about'},
]

const useStyles = makeStyles({
    navDisplayFlex: {
        display: 'flex',
        justifyContent:'space-between'
    },
    linkText: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: 'white'
    }
})

const Navbar = () =>{
    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
            <AppBar position="static" style={{ background: '#81c7e9' }}>
                <Toolbar>
                        <List Component='nav' aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                            {navLinks.map(({title, path}) => (
                                // <a href={path} key={title} className={classes.linkText}>
                                <Link to={path} key={title}>
                                    <ListItem button>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                    </Link>
                                // </a>
                            ))}
                        </List>
                </Toolbar>
            </AppBar>
    )
}

export default Navbar