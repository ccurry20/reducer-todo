//import React, { useReducer } from 'react';

export const todos = [
  {
    item: "Get Groceries",
    completed: false,
    id: 1
  },

  {
    item: "Visit family",
    completed: false,
    id: 2
  },

  {
    item: "Go Shopping",
    completed: false,
    id: 3
  }
];

export const reducerTodo = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: action.id
        }
      ];

    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id !== action.key) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed
        };
      });

      case 'DELETE_TODO' : 
      return state.filter(todo => todo.completed === false)

    default:
      return state;
  }
};
