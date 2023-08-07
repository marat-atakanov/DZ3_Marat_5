import {combineReducers} from "redux";
import titleReducer from "./titleReducer";
import usersReducer from "./usersReducer";
import sumOfInputReducer from "../sumOfInputsReducer";

export const rootReducer = combineReducers({
    titleReducer,
    usersReducer,
    sumOfInputReducer
})