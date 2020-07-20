import React from 'react'

const ToDoCard = ( {title, completed} ) => {
    return (
    <div className="ui card">
        <div className="content">
          <div className="header">{title}</div>
          {completed === true ? <button onClick={null} className="ui button orange">Incomplete</button> : <button onClick={null} className="ui button blue">Complete</button>}
          <button onClick={null} className="ui button red">Delete</button>
        </div>
        
    </div>
    )
}

export default ToDoCard