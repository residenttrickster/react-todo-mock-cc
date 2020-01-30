import React from 'react';
import './App.css';
import Header from './components/Header'
import ToDoContainer from './components/ToDoContainer'

// const todosArr = [
//   {
//     "title": "Eat",
//     "completed": true
//   },
//   {
//     "title": "Sleep",
//     "completed": false
//   },
//   {
//     "title": "Listen to Eric talk about how much he loves Fortnite",
//     "completed": false
//   },
//   {
//     "title": "Workout",
//     "completed": true
//   },
//   {
//     "title": "Lecture",
//     "completed": false
//   },
//   {
//     "title": "Code",
//     "completed": true
//   }
// ]

class App extends React.Component{

  state = {
    todos: []
  }

  handleCompleteChange = (updateObj) => {
    // console.log(updateObj)
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === updateObj.id){
        const update = {
          ...todo,
          completed: !todo.completed
        }
        return update
      }
      return todo
    })
    this.setState({
      todos: updatedTodos
    })
  }

  handleAddNewToDo = (newTodoObj) => {
    // console.log(newTodoObj)
    this.setState({
      todos: [...this.state.todos, newTodoObj]
    })
  }

  handleRemoveTodo = (removedTodo) => {
    console.log(removedTodo)
    const removedTodoArr = this.state.todos.filter(todo => todo.id !== removedTodo.id)

    this.setState({
      todos: removedTodoArr
    })
  }

  componentDidMount(){
    fetch(`http://localhost:3000/todos`)
    .then(res => res.json())
    .then(todosArr => this.setState({
      todos: todosArr
    }))
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <ToDoContainer todos={this.state.todos} handleCompleteChange={this.handleCompleteChange} handleAddNewToDo={this.handleAddNewToDo} handleRemoveTodo={this.handleRemoveTodo}/>
      </div>
    );
  }
}

export default App;
