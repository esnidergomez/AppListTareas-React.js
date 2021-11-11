import React from 'react'


import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";

import { CreateTodoButton } from "../CreateTodoButton/index";


function AppIU({
  loading,
  error,
  totalTodos,
  completedTodos,
  serchValue,
  setSerchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {
  return(
  <>
    <TodoCounter
      total={totalTodos}
      completados={completedTodos} />
    <TodoSearch
      serchValue={serchValue}
      setSerchValue={setSerchValue}
    />
    <TodoList>
      {loading &&  <p>Estamos cargando, no desesperes . . .</p>}
      {error &&  <p>Desesperate, ocurrio un error . . .</p>}
      {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}



      {searchedTodos.map(todo => (
        <TodoItem
          key={todo.text}
          todo={todo}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>
    <CreateTodoButton />
  </>
  )
}

export {AppIU};




