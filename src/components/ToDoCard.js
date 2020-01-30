import React from 'react'

const ToDoCard = (props) => {

    const handleUpdateComplete = () => {
        fetch(`http://localhost:3000/todos/${props.todo.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                completed: !props.todo.completed
            })
        })
        .then(res => res.json())
        .then(updatedObj => props.handleCompleteChange(updatedObj))
    }

    const handleRemove = () => {
        fetch(`http://localhost:3000/todos/${props.todo.id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(filler => props.handleRemoveTodo(props.todo))
        
    }
    return (
    <div className="ui card">
        <div className="content">
          <div className="header">{props.todo.title}</div>
          {/* The button will require some conditional rendering. 
            If the button is under the Incomplete Container, button should be blue and text should say Complete
            If the button is under Complete Container, button should be orange and text should say Incomplete 
            */}
          <button onClick={handleUpdateComplete} className={`ui button ${props.todo.completed ? "orange" : "blue"}`}>{props.todo.completed ? "Incomplete" : "Complete"}</button>
          <button onClick={handleRemove} className="ui button red">Delete</button>
        </div>
        
    </div>
    )
}

export default ToDoCard