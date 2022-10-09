import axios from "axios";
import {
  API_URL,
  GET_FAILED_TODOS,
  GET_REQUEST_TODOS,
  GET_SUCCESS_TODOS,
} from "../Constants/TodosConstants";

export const getAllTodos = () => async (dispatch) => {
  dispatch({ type: GET_REQUEST_TODOS });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: GET_SUCCESS_TODOS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_FAILED_TODOS, payload: error.message });
  }
};
