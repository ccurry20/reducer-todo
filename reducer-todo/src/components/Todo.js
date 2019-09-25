import React, { useState, useReducer } from 'react'
import {todos, reducerTodo} from "../reducers/reducer";


  function Todo() { 
    const [todo, setTodo] = useState()
    const [state, dispatch] = useReducer (reducerTodo, todos)
    
    const handleChange = e => {
      setTodo(e.target.value)
   }

   const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', payload: todo})
    setTodo();
 }

    return (
      <>
      <div>My Todo List</div>
      <form onSubmit={handleSubmit}>
      <input
         type='text'
         name='todo'
         value={!todo ? '' : todos.item}
         onChange={handleChange}
         />
       <button onSubmit ={handleSubmit} type='submit'>Submit</button>
</form>
         <div>
             {state.map(todo => (
                    <p>{todo.item}</p>
              
             ))}
             </div>
 
      {/* <button onClick={() => dispatch({ type: 'ADD_TODO' })}>ADD TODO</button> */}
</>
    )
  }
  export default Todo