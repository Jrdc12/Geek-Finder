const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state, // spread the old state
                users: action.payload,
                loading: false,

            }

        case 'GET_USER':
            return {
                ...state, // spread the old state
                user: action.payload,
                loading: false,
            }
        
        case 'GET_REPOS':
            return {
                ...state, // spread the old state
                repos: action.payload,
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