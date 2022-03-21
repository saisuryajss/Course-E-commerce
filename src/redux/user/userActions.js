import userActionTypes  from "./userActionTypes";


export const googleSignInStart=()=>({
  type:userActionTypes.GOOGLE_SIGN_START
})

export const signInSuccess=(user)=>({
  type:userActionTypes.SIGN_IN_SUCCESS,
  payload:user
})

export const signInFailure=(error)=>({
    type:userActionTypes.SIGN_IN_FAILURE,
    payload:error
})

export const emailSignInStart=(emailAndPassword)=>({
    type:userActionTypes.EMAIL_SIGN_START,
    payload:emailAndPassword
  })
