import {DICT_WORLD_SKILL_CATEGORY_TYPE} from './actions';
import {InitialState} from "./state";

export function reducer(state = InitialState, action) {
    if (action.type === DICT_WORLD_SKILL_CATEGORY_TYPE) {
        return action.reduce(state);
    } else {
        return state;
    }
}