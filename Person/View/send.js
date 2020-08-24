import axios from "axios";
import notify from "devextreme/ui/notify";
import {operationAbort, operationComplete, operationPending} from "./actions";
import {fetchData, fetchSkillStatesData, fetchWorldSkillsData} from "./fetch";

export function sendSkillState(id, skillStateId) {
    let putUrl = "/work/api/person/" + id + "/skill-state";
    return axios.post(putUrl,
        {
            "skillStateId": skillStateId
        },
        {
            headers: {
                'Accept': 'application/json'
            },
        })
}

export function sendWorldSkill(id, worldSkillId) {
    let putUrl = "/work/api/person/" + id + "/world-skill";
    return axios.post(putUrl,
        {
            "worldSkillId": worldSkillId
        },
        {
            headers: {
                'Accept': 'application/json'
            },
        })
}


export function sendData(id, mainData) {
    let mainUrl = "/work/api/person/" + id;
    return axios.put(mainUrl, {
        main: {
            firstName: mainData.firstName,
            middleName: mainData.middleName,
            lastName: mainData.lastName,
            firstNameR: mainData.firstNameR,
            middleNameR: mainData.middleNameR,
            lastNameR: mainData.lastNameR,
            firstNameD: mainData.firstNameD,
            middleNameD: mainData.middleNameD,
            lastNameD: mainData.lastNameD,
            sex: mainData.sex,
            birthday: mainData.birthday,
            snils: mainData.snils,
            inn: mainData.inn,
            postAddress: mainData.postAddress,
            legalAddress: mainData.legalAddress,
            phone: mainData.phone,
            phoneExtra: mainData.phoneExtra,
            email: mainData.email,
            region: mainData.region,
            municipal: mainData.municipal,
            documentDocType: mainData.documentDocType,
            documentSeries: mainData.documentSeries,
            documentNumber: mainData.documentNumber,
            documentIssueOrgan: mainData.documentIssueOrgan,
            documentDate: mainData.documentDate,
            documentIssueCode: mainData.documentIssueCode
        }
    }, {
        headers: {
            'Accept': 'application/json'
        },
    });
}

export function saveData() {
    return (dispatch, getState) => {
        let id = getState().personView.id;
        let mainData = getState().personView.mainData;
        dispatch(operationPending());
        sendData(id, mainData).then(() => {
            return fetchData(id, dispatch);
        }, () => {
            dispatch(operationAbort());
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
        let id = getState().personView.id;
        let mainData = getState().personView.mainData;
        dispatch(operationPending());
        sendData(id, mainData).then(() => {
            dispatch(operationComplete());
            cb(true);
        }, () => {
            dispatch(operationAbort());
            cb(false);
            notify({
                closeOnClick: true,
                closeOnOutsideClick: true,
                message: 'При сохранении данных произошла ошибка'
            }, 'error');
        })
    }
}

export function addSkillState(skillStateId) {
    return (dispatch, getState) => {
        let id = getState().personView.id;
        dispatch(operationPending());
        sendSkillState(id, skillStateId)
            .then(() => {
                return fetchSkillStatesData(id, dispatch)
                    .then(() => dispatch(operationComplete()));
            }, () => {
                notify({
                    closeOnClick: true,
                    closeOnOutsideClick: true,
                    message: 'При добавлении навыка произошла ошибка'
                }, 'error');
                dispatch(operationAbort());
            })
    }
}

export function addWorldSkill(worldSkillId) {
    return (dispatch, getState) => {
        let id = getState().personView.id;
        dispatch(operationPending());
        sendWorldSkill(id, worldSkillId)
            .then(() => {
                return fetchWorldSkillsData(id, dispatch)
                    .then(() => dispatch(operationComplete()));
            }, () => {
                notify({
                    closeOnClick: true,
                    closeOnOutsideClick: true,
                    message: 'При добавлении компетенции произошла ошибка'
                }, 'error');
                dispatch(operationAbort());
            })
    }
}