import React, { useState } from 'react';
import './App.css';
import 'fontsource-roboto';
import Todo from './todo'
import { AppBar, Toolbar, TextField, InputAdornment } from '@material-ui/core';
import { Add } from '@material-ui/icons'
import { styled } from '@material-ui/styles'

const AddTaskIcon = styled(Add)({
  color: 'white',
})

const MySearchField = styled(TextField)({
  width: '100%',
  color: 'white',
});

class Task {
  constructor(task) {
    this.task = task;
    this.id = (new Date()).getTime() + Math.random();
  }
}
class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.setState({
      value: ""
    });
  }

  render() {
    return (
      <AppBar>
        <Toolbar>
          <MySearchField id="Search-bar" variant="outlined" InputProps={{
            startAdornment: <InputAdornment position="start">
              <AddTaskIcon />
            </InputAdornment>,
            placeholder: "Add a task",
            autoFocus: true
          }} onChange={(e) => {
              // console.log(e.target.value);
              this.setState({
                value: e.target.value
              });
          }
          }
          onKeyPress = {e => {
            if(e.key === 'Enter'){
              console.log(this.state.value);
              this.props.addTaskHandler(this.state.value);
            }
          }}
          ></MySearchField>
        </Toolbar>
      </AppBar>
    );
  }
}


function App() {
  const [state, setState] = useState({
    tasks: [
    ]
  });
  return (
    <>
      <SearchBar addTaskHandler={(taskValue) => {
        setState({
          tasks: state.tasks.concat([new Task(taskValue)])
        })
      }}/>
      <div className="App-grid">
        <div className="App">
          <Todo tasks={state.tasks} removeHandler={(id) => {
            
            const taskIdx = state.tasks.findIndex(val => val.id === id);
            var newTasks = ([...state.tasks])
            newTasks.splice(taskIdx, 1)
            setState({
              tasks: newTasks
            })
          }} />
        </div>
      </div>
    </>
  );
}

export default App;
