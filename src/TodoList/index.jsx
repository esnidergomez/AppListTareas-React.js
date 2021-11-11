import React from 'react'
import './TodoListStyle.css'

function TodoList(props) {
    return (
        <section className="TodoList">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};