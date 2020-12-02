import { SET_LANGUAGE } from "../actions/ui_actions";

const defaultLanguage = localStorage.language || "0";

export default function languageReducer( state=defaultLanguage, action ) {
    switch (action.type) {
        case SET_LANGUAGE:
            localStorage.language = action.language
            return action.language
        default:
            return state;
    }
}