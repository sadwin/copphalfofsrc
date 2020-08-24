import axios from "axios";
import notify from "devextreme/ui/notify";
import { operationAbort, operationComplete, operationPending } from "./actions";
import {
    fetchDocumentAttachments,
    fetchSkillStatesData,
    fetchWorldSkillsData
} from "./fetch";

export function deleteDocumentAttachment(id, fileId) {
    const url = `/work/api/person/${id}/main/document/attachment/${fileId}`;
    return axios.delete(url);
}

export function deleteSkillState(id, skillStateId) {
    let url = "/work/api/person/" + id + "/skill-state/" + skillStateId;
    return axios.delete(url);
}

export function deleteWorldSkill(id, worldSkillId) {
    let url = "/work/api/person/" + id + "/world-skill/" + worldSkillId;
    return axios.delete(url);
}

export function removeDocumentAttachment(fileId) {
    return (dispatch, getState) => {
        let id = getState().personView.id;
        dispatch(operationPending());
        return deleteDocumentAttachment(id, fileId)
            .then(() => {
                return fetchDocumentAttachments(id, dispatch);
            })
            .then(() => dispatch(operationComplete()))
            .catch(() => {
                dispatch(operationAbort());
                notify(
                    {
                        closeOnClick: true,
                        closeOnOutsideClick: true,
                        message: "При удалении вложения произошла ошибка"
                    },
                    "error"
                );
            });
    };
}

export function removeSkillState(skillStateId) {
    return (dispatch, getState) => {
        let id = getState().personView.id;
        dispatch(operationPending());
        return deleteSkillState(id, skillStateId)
            .then(() => fetchSkillStatesData(id, dispatch))
            .then(() => dispatch(operationComplete()))
            .catch(() => {
                dispatch(operationAbort());
                notify(
                    {
                        closeOnClick: true,
                        closeOnOutsideClick: true,
                        message: "При удалении навыка произошла ошибка"
                    },
                    "error"
                );
            });
    };
}

export function removeWorldSkill(worldSkillId) {
    return (dispatch, getState) => {
        let id = getState().personView.id;
        dispatch(operationPending());
        return deleteWorldSkill(id, worldSkillId)
            .then(() => fetchWorldSkillsData(id, dispatch))
            .then(() => dispatch(operationComplete()))
            .catch(() => {
                dispatch(operationAbort());
                notify(
                    {
                        closeOnClick: true,
                        closeOnOutsideClick: true,
                        message: "При удалении компетенции произошла ошибка"
                    },
                    "error"
                );
            });
    };
}
