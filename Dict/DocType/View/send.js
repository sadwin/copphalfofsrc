import axios from "axios";
import notify from "devextreme/ui/notify";
import {operationComplete, operationPending} from "./actions";
import {fetchData} from "./fetch";

export function sendData(id, mainData) {
    let mainUrl = "/work/api/dict/doc-type/" + id;
    return axios.put(mainUrl, {
        main: mainData
    }, {
        headers: {
            'Accept': 'application/json'
        },
    });
}

export function saveData() {
    return (dispatch, getState) => {
        let id = getState().dictDocTypeView.id;
        let mainData = getState().dictDocTypeView.mainData;
        dispatch(operationPending());
        sendData(id, mainData).then(() => {
            return fetchData(id, dispatch);
        }, () => {
            dispatch(operationComplete());
            notify({
                closeOnClick: true,
                closeOnOutsideClick: true,
                message: 'При сохранении данных произошла ошибка'
            }, 'error')
        })
    }
}

export function promptSaveData(cb) {
    return (dispatch, getState) => {
        let id = getState().dictDocTypeView.id;
        let mainData = getState().dictDocTypeView.mainData;
        dispatch(operationPending());
        sendData(id, mainData).then(() => {
            cb(true);
            dispatch(operationComplete());
        }, () => {
            dispatch(operationComplete());
            cb(false);
            notify({
                closeOnClick: true,
                closeOnOutsideClick: true,
                message: 'При сохранении данных произошла ошибка'
            }, 'error');
        })
    }
}