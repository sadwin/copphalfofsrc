import {DICT_LEGAL_FORM_TYPE} from './actions';
import {InitialState} from "./state";

export function reducer(state = InitialState, action) {
    if (action.type === DICT_LEGAL_FORM_TYPE) {
        return action.reduce(state);
    } else {
        return state;
    }
}