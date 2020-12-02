import languageReducer from './language_reducer';
import { combineReducers } from "redux";

const uiReducer = combineReducers({
    language: languageReducer
})

export default uiReducer;