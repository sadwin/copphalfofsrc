import {InitialState} from "./state";

export const DICT_WORLD_SKILL_CATEGORY_TYPE = "DICT_WORLD_SKILL_CATEGORY_TYPE";


export function navigated(id) {
    return {
        type: DICT_WORLD_SKILL_CATEGORY_TYPE,
        reduce: (state) => ({
            ...InitialState,
            id
        })
    }
}

export function operationPending() {
    return {
        type: DICT_WORLD_SKILL_CATEGORY_TYPE,
        reduce: (state) => ({
            ...state,
            viewState: 0,
        })
    }
}

export function operationComplete(viewState = 200) {
    return {
        type: DICT_WORLD_SKILL_CATEGORY_TYPE,
        reduce: (state) => ({
            ...state,
            viewState: viewState,
        })
    }
}

export function receiveMainSuccess(main) {
    return {
        type: DICT_WORLD_SKILL_CATEGORY_TYPE,
        reduce: (state) => ({
            ...state,
            mainData: main.data,
            mainDataChanged: false,
        })
    }
}

export function receiveRevisionsSuccess(revisions) {
    return {
        type: DICT_WORLD_SKILL_CATEGORY_TYPE,
        reduce: (state) => ({
            ...state,
            revisionsInfo: revisions || [],
            hasRevisions: true,
        })
    }
}

export function receiveRevisionsError() {
    return {
        type: DICT_WORLD_SKILL_CATEGORY_TYPE,
        reduce: (state) => ({
            ...state,
            revisionsInfo: [],
            hasRevisions: false,
        })
    }
}

export function setMainDataProperty(property, value) {
    return {
        type: DICT_WORLD_SKILL_CATEGORY_TYPE,
        reduce: (state) => ({
            ...state,
            mainData: {
                ...state.mainData,
                [property]: value
            },
            mainDataChanged: true,
        })
    }
}