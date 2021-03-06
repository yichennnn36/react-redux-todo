import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, CLEAR_ALL_COMPLETED } from '../actionTypes';

let todoId = 0;
const initialState = {
  todos: []
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {
          id: todoId++,
          content: action.payload.content,
          completed: false
        }]
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos
          .filter(todo => todo.id !== action.payload.id)
      }

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos
          .map(todo => {
            if (todo.id !== action.payload.id) return todo;
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          )
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos
          .map(todo => {
            if (todo.id !== action.payload.id) return todo;
            return {
              ...todo,
              content: action.payload.content
            }
          })
      }

    case CLEAR_ALL_COMPLETED:
      return {
        ...state,
        todos: state.todos
          .filter(todo => !todo.completed)
      }


    default:
      return state;
  }
}
