import userActionTypes  from "./userActionTypes";


export const googleSignInStart=()=>({
  type:userActionTypes.GOOGLE_SIGN_START
})

export const googleSignInSuccess=(user)=>({
  type:userActionTypes.GOOGLE_SIGN_SUCCESS,
  payload:user
})

export const googleSignInFailure=(error)=>({
    type:userActionTypes.GOOGLE_SIGN_FAILURE,
    payload:error
})

export const emailSignInStart=(emailAndPassword)=>({
    type:userActionTypes.EMAIL_SIGN_START,
    payload:emailAndPassword
  })
  
  export const emailSignInSuccess=(user)=>({
    type:userActionTypes.EMAIL_SIGN_SUCCESS,
    payload:user
  })
  
  export const emailSignInFailure=(error)=>({
      type:userActionTypes.EMAIL_SIGN_FAILURE,
      payload:error
  })

export const setCurrentUser = user => {
    return {
        type: userActionTypes.SET_CURRENT_USER,
        payload: user
    };
}
