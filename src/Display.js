import React from 'react';
import { Checkbox,List, ListItem,ListItemIcon, ListSubheader} from '@material-ui/core';

const Display = (props) => {
    return (
        <List>
            {
                props.map(
                    (items) => {
                        return(
                            <ListSubheader>
                                <Checkbox
                                    indeterminate={numSelected > 0 && numSelected < rowCount}
                                    checked={rowCount > 0 && numSelected === rowCount}
                                    onChange={props.onSelectAllClick}
                                    inputProps={{ 'aria-label': 'select all desserts' }}
                                />
                                
                            </ListSubheader>
                        )
                    }
                )
            }
        </List>
    )
}

export default Display