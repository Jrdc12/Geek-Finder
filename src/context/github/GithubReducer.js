const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state, // spread the old state
                users: action.payload,
                loading: false,

            }
        
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }


            // This clear user state.
        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            }
        
        default:
            return state;
    }
}

export default githubReducer;