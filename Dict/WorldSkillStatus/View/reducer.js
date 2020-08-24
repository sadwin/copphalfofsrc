import {DICT_WORLD_SKILL_STATUS_TYPE} from './actions';
import {InitialState} from "./state";

export function reducer(state = InitialState, action) {
    if (action.type === DICT_WORLD_SKILL_STATUS_TYPE) {
        return action.reduce(state);
    } else {
        return state;
    }
}