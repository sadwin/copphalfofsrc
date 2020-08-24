import {DICT_MUNICIPAL_TYPE} from './actions';
import {InitialState} from "./state";

export function reducer(state = InitialState, action) {
    if (action.type === DICT_MUNICIPAL_TYPE) {
        return action.reduce(state);
    } else {
        return state;
    }
}