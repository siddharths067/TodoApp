import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core';

class Todo extends React.Component {


    render() {
        return <List component="nav" aria-label="contacts">
            {
                this.props.tasks.map((task) => {
                    return <ListItem key={task.id} onClick={(e) => {
                        e.preventDefault();
                        this.props.removeHandler(task.id);
                    }} button>
                        <ListItemText inset primary={task.task} />
                    </ListItem>
                })
            }
        </List>
    }
}

export default Todo;