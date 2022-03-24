
const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN': {
            return { ...state, authentificated: true };
        }
        case 'LOGOUT': {
            return { ...state, authentificated: false };
        }
        default:
            return state
    }
}
