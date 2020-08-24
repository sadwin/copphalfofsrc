import {DICT_PERSON_SKILL_STATE_TYPE} from './actions';
import {InitialState} from "./state";

export function reducer(state = InitialState, action) {
    if (action.type === DICT_PERSON_SKILL_STATE_TYPE) {
        return action.reduce(state);
    } else {
        return state;
    }
}