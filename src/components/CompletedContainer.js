import React from 'react'
import ToDoCard from './ToDoCard'

const CompletedContainer = (props) => {
    return (
        <div>
            <h1>Completed Todos</h1>
            {
                props.todos.map(todo => <ToDoCard handleCompleteChange={props.handleCompleteChange} todo={todo} key={todo.id} handleRemoveTodo={props.handleRemoveTodo}/>)
            }
            
            {/* Render ToDo Card for each ToDo */}
             {/* Which Array method can you use? */}
        </div>
    )
}

export default CompletedContainer