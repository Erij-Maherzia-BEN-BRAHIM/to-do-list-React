import React from "react";
import ToDoList from "./ToDoList";
import Navbar from "./navbar";
import AddTask from "./AddTask";
import initialData from "../initialData";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../../src/css/toDo.css";
import uniqueid from 'uniqueid';
class App extends React.Component {
  state = {
    tasks: initialData,
  };
  onToggleDone = (taskId) => {
    let taskToUpdate = this.state.tasks.find((task) => task.id === taskId);
    taskToUpdate.done = !taskToUpdate.done;
    this.setState((prevState) => {
      prevState.tasks.map((task) => {
        return task.id === taskId ? taskToUpdate : task;
      });
    });
  };
  onAddTask=(newTaskName)=>{
    let newTask={ 
      id: uniqueid(),
      name: newTaskName,
      done: false

      
    }
    this.setState(prevState=>({
      tasks:[...prevState.tasks, newTask]
    }))
  }
  onDeleteCompleted=()=>{
    this.setState(prevState=>{
      let newState= prevState.tasks.filter(task=> !task.done)
      return{
        tasks: newState
      }
    })
  }
  render() {
    return (
      <section id="todo">
        <BrowserRouter>
          <Switch>
            <Route path="/add-task"
              render={(props) => (
                <AddTask {...props} tasks={this.state.tasks} onAddTask={this.onAddTask}/> )}
                />
            <Route
              path="/:filter?"
              render={(props) => (
                <ToDoList {...props} tasks={this.state.tasks} onToggleDone={this.onToggleDone}/>
              )}
            />
          </Switch>
          <Navbar onDeleteCompleted={this.onDeleteCompleted} />
        </BrowserRouter>
      </section>
    );
  }
}
export default App;
