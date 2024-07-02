const initState = {
    search: '',
    status: 'All',
    priority: []
}

const filtersReducer = (state = initState, action) => {
    switch(action.type){
        case 'filter/searchFilterChange':
            return {
                    ...state,
                    search: action.payload
                }
            default:
                return state;
    }
}

export default filtersReducer;