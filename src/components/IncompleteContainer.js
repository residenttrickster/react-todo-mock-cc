import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'
import React, { Component } from 'react';

export default class IncompleteContainer extends Component {

  // When implementing the search bar, consider implementing state here to make it dynamic. 
    // i.e everytime you type in the input field, the ToDos are immediately filtered
    
    state = {
      searchTerm: ""
  }

   // When implementing the search bar, consider implementing a function that handles setState and pass this function down to 
    // SearchBarComponent
  
    handleOnChange = (searchTerm) => {
      this.setState ({
        searchTerm: searchTerm
      })
    }

  renderIncomplete = () => {
    const incompletedTasks = this.props.todos.filter(todos => todos.completed === false)
    // const filteredTasks = incompletedTasks.filter(todos => todos.title.includes(this.state.searchTerm))
    return incompletedTasks.map(todos =>
      <ToDoCard 
      key={todos.id} 
      id={todos.id}
      title={todos.title}
      completed={todos.completed }
      toggleComplete={this.props.toggleComplete}
      removeTodo={this.props.removeTodo}
      />
    )
    
  }

    // When implementing the search term, consider implementing a function that FILTERs the todos.
    // To determine which to filter, find out which ToDo title INCLUDES the search term typed.

  render() {
    return (
        <div>
            <h1>Incomplete Todos</h1>
            <SearchBarComponent searchTerm={this.state.searchTerm} handleOnChange={this.handleOnChange}/>
            {this.renderIncomplete()}
        </div>
    )
  }
}
