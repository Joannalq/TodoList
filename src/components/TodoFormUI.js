import {TextField,Container,Grid,Select, InputLabel} from '@material-ui/core'
import React from 'react';
import Button from '@material-ui/core/Button';


export default function TodoFormUI (){
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value)
    }
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
                                    value={category}
                                    onChange={handleChange}
                                    style = {{border: '0.5px solid'}}
                                    >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                                {/* <TextField
                                    // className={classes.root}
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                    variant="outlined"
                                    label="My Label"
                                    select
                                >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </TextField> */}
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
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Button fullWidth type="submit" variant="contained" style={{background:'#4285f4'}}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>    
            </form>
        </Container>
   
    )
  
}

