import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

export default class ToDoContainer extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/todos`)
    .then(r => r.json())
    .then(todos => {
      this.setState({ todos })
    })
  }


  addNewTask = newTask => {
    this.setState({
      todos:[newTask, ...this.state.todos]
    })

  }

  render() {
    return (
      <div id="todo-container">
        <NewToDoForm addNewTask={this.addNewTask}/>
        <CompletedContainer todos={this.state.todos} />
        <IncompleteContainer todos={this.state.todos}/>
      </div>
    );
  }
}
