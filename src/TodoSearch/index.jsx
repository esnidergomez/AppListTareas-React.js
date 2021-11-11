import React from 'react'
import './TodoSearchStyle.css'

function TodoSearch({searchValue, setSerchValue}) {

    const onSearchValueChange=(event) => {
        console.log(event.target.value);
        setSerchValue(event.target.value);
    };



    return (
        <input 
            className="TodoSearch" 
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}/>//onchange escucha cambios
            
    )
}

export {TodoSearch};


