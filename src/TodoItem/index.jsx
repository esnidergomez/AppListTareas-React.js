import React from 'react'
import './TodoItemStyle.css'


function TodoItem({todo,onComplete, onDelete}) {

    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${todo.completed && 'Icon-check--active'}`}
                onClick={onComplete}>√
            </span>
            <p className={`TodoItem-p ${todo.completed && 'TodoItem-p--complete'}`}>{todo.text}
            </p>{/*Este && es un if nos dice que si props.complete es verdadero nos va a agregar al String el TodoItem-p--complete*/}
            <span 
                className="Icon Icon-delete"
                onClick={onDelete}>X
            </span>
        </li>
    )
}

export {TodoItem};