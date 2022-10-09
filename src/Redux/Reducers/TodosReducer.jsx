import {
  GET_FAILED_TODOS,
  GET_REQUEST_TODOS,
  GET_SUCCESS_TODOS,
} from "../Constants/TodosConstants";

const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_REQUEST_TODOS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SUCCESS_TODOS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_FAILED_TODOS:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default todosReducer;
