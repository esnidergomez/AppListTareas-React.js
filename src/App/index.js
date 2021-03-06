import React from 'react'
import { AppIU } from './AppIU'



function useLocalStorage(itemName, initialValue) {

    const [loading,setLoading]=React.useState(true)
    const [error,setError]=React.useState(false)
    const [item, setItem] = React.useState(initialValue)


    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                
                let parsedItem;
    
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                setItem(parsedItem);
                setLoading(false);
                
            } catch (error) {
                setError(error);
            }

        }, 1000);
    })

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    }

    return {
        item,
        saveItem,
        loading,
        error
    };
}


function App() {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', [])

    //Buscar
    const [serchValue, setSerchValue] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];



    if (!serchValue.length >= 1) {
        searchedTodos = todos;
    } else {

        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = serchValue.toLowerCase();
            return todoText.includes(searchText);
        })
    }

    //Completado
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    //Eliminado
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <AppIU
            loading={loading}
            error={error}
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            serchValue={serchValue}
            setSerchValue={setSerchValue}
            searchedTodos={searchedTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />
    )
}

export default App;
