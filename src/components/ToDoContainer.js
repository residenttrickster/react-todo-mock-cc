import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

export default class ToDoContainer extends Component {

  completedTodos = () => this.props.todos.filter(todo => todo.completed)
  incompleteTodos = () => this.props.todos.filter(todo => !todo.completed)
  
  render() {
    return (
      <div id="todo-container">
        <NewToDoForm handleAddNewToDo={this.props.handleAddNewToDo}/>
        <CompletedContainer handleCompleteChange={this.props.handleCompleteChange} todos={this.completedTodos()} handleRemoveTodo={this.props.handleRemoveTodo} />
        <IncompleteContainer handleCompleteChange={this.props.handleCompleteChange} todos={this.incompleteTodos()} handleRemoveTodo={this.props.handleRemoveTodo}/>
      </div>
    );
  }
}
