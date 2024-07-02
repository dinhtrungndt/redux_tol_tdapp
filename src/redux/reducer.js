import filtersReducer from "../components/Filters/FlitersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";

const rootReducer = (state = {}, action) => {
    /*
    {
        type: 'todoList/addTodo',
        payload: {id: 4, name: 'Learn C#', completed: true, priority: 'High'},
    }
    */
    return {
        filter: filtersReducer(state.filter, action),
        todoList: todoListReducer(state.todoList, action),
    }
}

export default rootReducer;