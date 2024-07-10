import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/FlitersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";

const rootReducer = combineReducers({
    filter: filtersReducer,
    todoList: todoListReducer
})

export default rootReducer;