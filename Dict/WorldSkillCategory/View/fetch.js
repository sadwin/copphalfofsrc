import {
    navigated,
    operationPending,
    operationComplete,
    receiveMainSuccess,
    receiveRevisionsSuccess,
    receiveRevisionsError,
} from "./actions"
import axios from "axios";
import notify from "devextreme/ui/notify";

function fetchRevisionsData(id, dispatch) {
    let revisionsUrl = "/work/api/dict/world-skill-category/" + id + "/revisions";
    return axios.get(revisionsUrl, {
        headers: {'Accept': 'application/json'},
    }).then((response) => {
        dispatch(receiveRevisionsSuccess(response.data));
    }).catch(error => {
        if (error.response) {
            if (error.response.status === 403) {
                dispatch(receiveRevisionsError());
            } else {
                dispatch(receiveRevisionsError());
                notify({
                    closeOnClick: true,
                    closeOnOutsideClick: true,
                    message: 'Не удалось загрузить ревизии'
                }, 'error')
            }
        } else {
            dispatch(receiveRevisionsError());
            notify({
                closeOnClick: true,
                closeOnOutsideClick: true,
                message: 'Не удалось загрузить ревизии'
            }, 'error')
        }
    })
}

export function fetchData(id, dispatch) {
    let mainUrl = "/work/api/dict/world-skill-category/" + id;
    return axios.get(mainUrl, {
        headers: {'Accept': 'application/json'},
    }).then(response => {
        dispatch(receiveMainSuccess(response.data));
        return Promise.all([
            fetchRevisionsData(id, dispatch)
        ]).then(() => {
            dispatch(operationComplete());
        });
    }).catch(error => {
        if (error.response) {
            if (error.response.status === 404) {
                dispatch(operationComplete(404));
            } else if (error.response.status === 403) {
                dispatch(operationComplete(403));
            } else {
                dispatch(operationComplete(-1));
            }
        } else {
            dispatch(operationComplete(-1));
        }
        throw error;
    });
}

export function loadData(id) {
    return (dispatch) => {
        dispatch(navigated(id));
        dispatch(operationPending());
        return fetchData(id, dispatch);
    }
}

export function refreshData() {
    return (dispatch, getState) => {
        let id = getState().dictWorldSkillCategoryView.id;
        dispatch(operationPending());
        return fetchData(id, dispatch);
    }
}