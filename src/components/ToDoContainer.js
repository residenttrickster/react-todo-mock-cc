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

  toggleComplete = updatedTodo => {
    // create a new array 
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === updatedTodo.id) {
        // todo.completed = !todo.completed // this is mutating state!
        return updatedTodo
      } else {
        return todo
      }
    })

    // re-render
    this.setState({
      todos: updatedTodos
    })
  }

  handleAddTodo = (newTodo) => {
    this.setState ({
      todos: [...this.state.todos, newTodo]
    })
  }

  removeTodo = id => {
    const updatedTodos = this.state.todos.filter( todo => {
      if(todo.id !== id) {
        return true
      } else {
        return false
      }
    })
  }


  render() {
    return (
      <div id="todo-container">
        <NewToDoForm handleAddTodo={this.handleAddTodo}/>
        <CompletedContainer toggleComplete={this.toggleComplete} todos={this.state.todos} removeTodo={this.removeTodo}/>
        <IncompleteContainer todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}


  