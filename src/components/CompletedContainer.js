import React from 'react'
import ToDoCard from './ToDoCard'

class CompletedContainer extends React.Component {

    renderComplete = () => {
        const completedTasks = this.props.todos.filter(todos => todos.completed === true)
        return completedTasks.map(todos =>
            <ToDoCard 
            key={todos.id} 
            id={todos.id}
            title={todos.title}
            completed={todos.completed }
            toggleComplete={this.props.toggleComplete}
            removeTodo={this.props.removeTodo}
            />
        )}
        
        render () {
            return (
    <div>
                <h1>Completed Todos</h1>
                {this.renderComplete()}
            </div>
            )
        }
            
}


export default CompletedContainer