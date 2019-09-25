import React, { useState, useReducer } from 'react'
import {todos, reducerTodo} from "../reducers/reducer";
import '../index.css';

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

 const handleToggle = e => {
   dispatch({type: 'TOGGLE_TODO', payload: todo.item})
 }

 const handleDelete = () => {
  dispatch({type: 'DELETE_TODO', payload: todos})
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
                    <p onClick ={() => dispatch({type:'TOGGLE_TODO', key: todo.id})} className={!todo.completed ?'' : 'toggle' }>{todo.item} {todo.completed && "complete"}</p>
              
             ))}
             </div>
 
      <button onClick={() => dispatch({ type: 'DELETE_TODO' })}>Complete TODO</button>
</>
    )
  }
  export default Todo