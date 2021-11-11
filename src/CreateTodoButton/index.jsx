import React from 'react'
import './CreateTodoButtonStyle.css'

function CreateTodoButton() {

    const onClickButton = (msg) => {//Recordar que lo que hace JS al ver parentesis es ejecutarlo
        alert(msg);
    }

    return (
        <button 
            className="CreateTodoButton"
            onClick={()=> onClickButton('Aque se demera ..')}>
            +
        </button>
    )
}

export {CreateTodoButton};