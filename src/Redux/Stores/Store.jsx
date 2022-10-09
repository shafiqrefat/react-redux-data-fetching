import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import todosReducer from "../Reducers/TodosReducer";

const store = createStore(todosReducer, applyMiddleware(thunk));
export default store;
