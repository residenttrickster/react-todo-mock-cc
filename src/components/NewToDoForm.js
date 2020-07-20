import React, { Component } from 'react';

export default class NewToDoForm extends Component {

  state ={
    name: "",
    completed:false
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault() 
    const bodyData = {
      "name": this.state.name,
      "completed":false
    }

    fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(bodyData)
  })
  .then(r => r.json)
  .then(newTask => {
    this.props.addNewTask(newTask)
  })
  }




  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
            <h1>New ToDo</h1>
            <div className="field">
                <label>Title</label>
                <input type="text" name="title" placeholder="Title" value={this.state.name} onChange={this.handleInputChange} />
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
