import { combineReducers } from "redux";
import userReducer from "./user-reducer/userReducer";

export default combineReducers({
    user:userReducer
});
