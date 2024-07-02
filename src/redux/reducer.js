const initState = {
    filter:{
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        {id: 1, name: 'Learn Code', completed: false, priority: 'Medium'},
        {id: 2, name: 'Learn HTML', completed: true, priority: 'High'},
        {id: 3, name: 'Learn Java', completed: false, priority: 'Low'},
    ]
}

const rootReducer = (state = initState, action) => {
    /*
    {
        type: 'todoList/addTodo',
        payload: {id: 4, name: 'Learn C#', completed: true, priority: 'High'},
    }
    */
   console.log({state, action})
    switch(action.type){
        case 'todoList/addTodo':
            return{
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
            
            default:
                return state;
    }
}

export default rootReducer;