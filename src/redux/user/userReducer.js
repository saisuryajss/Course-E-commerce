import  userActionTypes  from "./userActionTypes";

const INITIAL_STATE = {
    user: null,
    error:null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.EMAIL_SIGN_SUCCESS:
        case userActionTypes.EMAIL_SIGN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error:null
            };
        case userActionTypes.GOOGLE_SIGN_FAILURE:
        case userActionTypes.EMAIL_SIGN_FAILURE:
            return{
              ...state,
              error:action.payload
            };
        default:
            return state;
    }
}

export default userReducer;