export const addTodo = (data) =>{
    return{
        type: 'todoList/addTodo',
        payload: data
    }
}

// action creators => function