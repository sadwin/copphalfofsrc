import { InitialState } from "./state";

export const DICT_MUNICIPAL_TYPE = "DICT_MUNICIPAL_TYPE";

export function navigated(id) {
    return {
        type: DICT_MUNICIPAL_TYPE,
        reduce: state => ({
            ...InitialState,
            id
        })
    };
}

export function operationPending() {
    return {
        type: DICT_MUNICIPAL_TYPE,
        reduce: state => ({
            ...state,
            viewState: 0
        })
    };
}

export function operationComplete(viewState = 200) {
    return {
        type: DICT_MUNICIPAL_TYPE,
        reduce: state => ({
            ...state,
            viewState: viewState
        })
    };
}

export function receiveMainSuccess(main) {
    return {
        type: DICT_MUNICIPAL_TYPE,
        reduce: state => ({
            ...state,
            mainData: main.data,
            mainDict: main.dict,
            mainDataChanged: false
        })
    };
}

export function receiveRevisionsSuccess(revisions) {
    return {
        type: DICT_MUNICIPAL_TYPE,
        reduce: state => ({
            ...state,
            revisionsInfo: revisions || [],
            hasRevisions: true
        })
    };
}

export function receiveRevisionsError() {
    return {
        type: DICT_MUNICIPAL_TYPE,
        reduce: state => ({
            ...state,
            revisionsInfo: [],
            hasRevisions: false
        })
    };
}

export function setMainDataProperty(property, value) {
    return {
        type: DICT_MUNICIPAL_TYPE,
        reduce: state => ({
            ...state,
            mainData: {
                ...state.mainData,
                [property]: value
            },
            mainDataChanged: true
        })
    };
}

export function receiveListSuccess(data) {
    // console.log("Municipals", data);
    // const regionMap = data.reduce((res, curr) => {
    //     const key = curr.regionCode;
    //     if (!res[key]) {
    //         res[key] = [];
    //     }
    //     const municipals = res[key];
    //     municipals.push(curr);
    //     return res;
    // }, {});

    return {
        type: DICT_MUNICIPAL_TYPE,
        reduce: state => ({
            ...state,
            list: data,
            // regionMap,
            listLoaded: true
        })
    };
}

export function loadByRegionSuccess(data, regionId) {
    return {
        type: DICT_MUNICIPAL_TYPE,
        reduce: state => ({
            ...state,
            regionMap: { ...state.regionMap, [regionId]: data }
        })
    };
}
