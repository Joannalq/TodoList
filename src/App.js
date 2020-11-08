import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import TodoApp from './TodoApp';
import About from './About';
import { Grid } from "@material-ui/core";
import ItemPage from "./components/ItemPage";

export default function App(){
    return(
        <Router>
            <Grid container spacing={3} direction='row' align='center' >
                <Grid item xs={12}>
                    <Nav/>
                </Grid>
                <Grid item xs={12}>
                    <Switch>
                        <Route exact path='/'>
                            <TodoApp/>
                        </Route>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/item'>
                            <ItemPage />
                        </Route>
                    </Switch>
                </Grid>
            </Grid>
        </Router>
    )
}