import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filter.search;
export const todoListSelector = (state) => state.todoList;
export const filterStatusSelector = (state) => state.filter.status;

export const todosRemainingSelector = createSelector(todoListSelector, searchTextSelector, filterStatusSelector, (todoList, searchText, status) => {
    return todoList.filter((todo) => {
        if(status === 'All'){
            return todo.name.includes(searchText)
        }
                 return todo.name.includes(searchText) && (
                        status === 'Completed' ? 
                        todo.completed : !todo.completed);
    })
})