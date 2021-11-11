import React from 'react'
import './TodoCounterStyle.css'

//Estilos el linea
/*const estilos={
    color:"red",
    backgroundColor:"yelow"
}*/

function TodoCounter() {
    return (
        <>
        {/*<h2 style={{
            color:"red",
            backgroundColor:"yelow"
        }}>
            Compraste varias cosas
        </h2>*/}
        <h2 className="TodoCounter">Compraste varias cosas</h2>
        </>
    )
}

export {TodoCounter};
