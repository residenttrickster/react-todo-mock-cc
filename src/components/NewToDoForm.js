import React, { Component } from 'react';

export default class NewToDoForm extends Component {
   state = {
        title: ""
   }

   handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
   }

   handleOnSubmit = e => {
       e.preventDefault();
       fetch(`http://localhost:3000/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            title: this.state.title,
            completed: false
        })
       })
       .then(res => res.json())
       .then(newTodo => {
        this.props.handleAddNewToDo(newTodo)
        this.setState({
            title: ""
        })
       })
   }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleOnSubmit}>
            <h2>New ToDo</h2>
            <div className="field">
                <label>Title</label>
                <input onChange={this.handleOnChange} type="text" name="title" value={this.state.title} placeholder="Title"/>
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
