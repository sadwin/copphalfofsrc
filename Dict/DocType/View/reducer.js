import {DICT_DOC_TYPE_TYPE} from './actions';
import {InitialState} from "./state";

export function reducer(state = InitialState, action) {
    if (action.type === DICT_DOC_TYPE_TYPE) {
        return action.reduce(state);
    } else {
        return state;
    }
}