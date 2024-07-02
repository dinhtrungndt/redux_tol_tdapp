const initState = [
        {id: 1, name: 'Learn Code', completed: false, priority: 'Medium'},
        {id: 2, name: 'Learn HTML', completed: true, priority: 'High'},
        {id: 3, name: 'Learn Java', completed: false, priority: 'Low'},
]

const todoListReducer = (state = initState, action) => {
    switch(action.type){
        case 'todoList/addTodo':
            return [
                    ...state,
                     action.payload
                ]
            default:
                return state;
    }
}

export default todoListReducer;