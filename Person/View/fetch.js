import {
    navigated,
    operationPending,
    fetchDataError,
    fetchDataSuccess,
    receiveMainDataComplete,
    receiveRevisionsDataComplete,
    receiveRevisionsDataError,
    receiveRevisionsDataForbidden,
    receiveDocumentAttachmentsComplete,
    receiveDocumentAttachmentsForbidden,
    receiveDocumentAttachmentsError,
    setMainDataMunicipals,
    receiveSkillStatesDataComplete,
    receiveSkillStatesDataForbidden,
    receiveSkillStatesDataError,
    operationComplete,
    operationAbort,
    receiveWorldSkillsDataComplete,
    receiveWorldSkillsDataError,
    receiveWorldSkillsDataForbidden,
    setCardData,
    receiveListSuccess,
    receivePostsSuccess
} from "./actions";
import axios from "axios";
import notify from "devextreme/ui/notify";

export function fetchRevisionsData(id, dispatch) {
    let revisionsUrl = "/work/api/person/" + id + "/revisions";
    return axios
        .get(revisionsUrl, {
            headers: { Accept: "application/json" }
        })
        .then(response => {
            dispatch(receiveRevisionsDataComplete(response.data));
        })
        .catch(error => {
            if (error.response) {
                if (error.response.status === 403) {
                    dispatch(receiveRevisionsDataForbidden());
                } else {
                    dispatch(receiveRevisionsDataError());
                    notify(
                        {
                            closeOnClick: true,
                            closeOnOutsideClick: true,
                            message: "Не удалось загрузить ревизии"
                        },
                        "error"
                    );
                }
            } else {
                dispatch(receiveRevisionsDataError());
                notify(
                    {
                        closeOnClick: true,
                        closeOnOutsideClick: true,
                        message: "Не удалось загрузить ревизии"
                    },
                    "error"
                );
            }
        });
}

export function fetchSkillStatesData(id, dispatch) {
    let skillStatesUrl = "/work/api/person/" + id + "/skill-state";
    return axios
        .get(skillStatesUrl, {
            headers: { Accept: "application/json" }
        })
        .then(response => {
            dispatch(receiveSkillStatesDataComplete(response.data || []));
        })
        .catch(error => {
            if (error.response) {
                if (error.response.status === 403) {
                    dispatch(receiveSkillStatesDataForbidden());
                } else {
                    dispatch(receiveSkillStatesDataError());
                    notify(
                        {
                            closeOnClick: true,
                            closeOnOutsideClick: true,
                            message: "Не удалось загрузить навыки"
                        },
                        "error"
                    );
                }
            } else {
                dispatch(receiveSkillStatesDataError());
                notify(
                    {
                        closeOnClick: true,
                        closeOnOutsideClick: true,
                        message: "Не удалось загрузить навыки"
                    },
                    "error"
                );
            }
        });
}

export function fetchWorldSkillsData(id, dispatch) {
    let worldSkillsUrl = "/work/api/person/" + id + "/world-skill";
    return axios
        .get(worldSkillsUrl, {
            headers: { Accept: "application/json" }
        })
        .then(response => {
            dispatch(receiveWorldSkillsDataComplete(response.data || []));
        })
        .catch(error => {
            if (error.response) {
                if (error.response.status === 403) {
                    dispatch(receiveWorldSkillsDataForbidden());
                } else {
                    dispatch(receiveWorldSkillsDataError());
                    notify(
                        {
                            closeOnClick: true,
                            closeOnOutsideClick: true,
                            message: "Не удалось загрузить компетенции"
                        },
                        "error"
                    );
                }
            } else {
                dispatch(receiveWorldSkillsDataError());
                notify(
                    {
                        closeOnClick: true,
                        closeOnOutsideClick: true,
                        message: "Не удалось загрузить компетенции"
                    },
                    "error"
                );
            }
        });
}

export function fetchDocumentAttachments(id, dispatch) {
    let revisionsUrl = `/work/api/person/${id}/main/document/attachment`;
    return axios
        .get(revisionsUrl, {
            headers: {
                Accept: "application/json"
            }
        })
        .then(response => {
            dispatch(receiveDocumentAttachmentsComplete(response.data || null));
        })
        .catch(error => {
            if (error.response) {
                if (error.response.status === 403) {
                    dispatch(receiveDocumentAttachmentsForbidden());
                } else {
                    dispatch(receiveDocumentAttachmentsError());
                    notify(
                        {
                            closeOnClick: true,
                            closeOnOutsideClick: true,
                            message: "Не удалось загрузить сканы документа"
                        },
                        "error"
                    );
                }
            } else {
                dispatch(receiveDocumentAttachmentsError());
                notify(
                    {
                        closeOnClick: true,
                        closeOnOutsideClick: true,
                        message: "Не удалось загрузить сканы документа"
                    },
                    "error"
                );
            }
        });
}

export function fetchData(id, dispatch) {
    let mainUrl = "/work/api/person/" + id;
    return axios
        .get(mainUrl, {
            headers: { Accept: "application/json" }
        })
        .then(response => {
            dispatch(
                receiveMainDataComplete(
                    response.data.data,
                    // {
                    //     firstName: response.data.firstName,
                    //     middleName: response.data.middleName,
                    //     lastName: response.data.lastName,
                    //     firstNameR: response.data.firstNameR,
                    //     middleNameR: response.data.middleNameR,
                    //     lastNameR: response.data.lastNameR,
                    //     firstNameD: response.data.firstNameD,
                    //     middleNameD: response.data.middleNameD,
                    //     lastNameD: response.data.lastNameD,
                    //     sex: response.data.sex,
                    //     birthday: response.data.birthday,
                    //     snils: response.data.snils,
                    //     inn: response.data.inn,
                    //     postAddress: response.data.postAddress,
                    //     legalAddress: response.data.legalAddress,
                    //     phone: response.data.phone,
                    //     phoneExtra: response.data.phoneExtra,
                    //     email: response.data.email,
                    //     region: response.data.region,
                    //     municipal: response.data.municipal,
                    //     documentDocType: response.data.documentDocType,
                    //     documentSeries: response.data.documentSeries,
                    //     documentNumber: response.data.documentNumber,
                    //     documentIssueOrgan: response.data.documentIssueOrgan,
                    //     documentDate: response.data.documentDate,
                    //     documentIssueCode: response.data.documentIssueCode,
                    //     created: response.data.created,
                    //     deleted: response.data.deleted
                    // },
                    response.data.sexes || [],
                    response.data.regions || [],
                    response.data.municipals || [],
                    response.data.documentDocTypes || []
                )
            );
            return Promise.all([
                fetchRevisionsData(id, dispatch),
                fetchDocumentAttachments(id, dispatch),
                fetchSkillStatesData(id, dispatch),
                fetchWorldSkillsData(id, dispatch)
            ]).then(() => {
                dispatch(fetchDataSuccess());
            });
        })
        .catch(error => {
            if (error.response) {
                if (error.response.status === 404) {
                    dispatch(fetchDataError(404));
                } else if (error.response.status === 403) {
                    dispatch(fetchDataError(403));
                } else {
                    dispatch(fetchDataError(-1));
                }
            } else {
                dispatch(fetchDataError(-1));
            }
            throw error;
        });
}

export function loadData(id) {
    return dispatch => {
        dispatch(navigated(id));
        dispatch(operationPending());
        return fetchData(id, dispatch);
    };
}

export function refreshData() {
    return (dispatch, getState) => {
        let id = getState().personView.id;
        dispatch(operationPending());
        return fetchData(id, dispatch);
    };
}

export function loadMainDataMunicipals(regionId) {
    return dispatch => {
        if (regionId != null) {
            let municipalsUrl = "/work/api/person/any/main/municipals";
            return axios
                .get(municipalsUrl, {
                    params: {
                        regionId: regionId
                    },
                    headers: {
                        Accept: "application/json"
                    }
                })
                .then(response => {
                    dispatch(setMainDataMunicipals(response.data || []));
                })
                .catch(error => {
                    console.log(error);
                    notify(
                        {
                            closeOnClick: true,
                            closeOnOutsideClick: true,
                            message:
                                "Не удалось загрузить муниципальные образования"
                        },
                        "error"
                    );
                });
        }
    };
}

export function loadDocumentAttachments() {
    return (dispatch, getState) => {
        let id = getState().personView.id;
        dispatch(operationPending());
        return fetchDocumentAttachments(id, dispatch)
            .then(() => dispatch(operationComplete()))
            .catch(() => dispatch(operationAbort()));
    };
}

export function addPerson(data) {
    return dispatch => {
        const url = "/work/api/person";
        dispatch(operationPending());
        return axios
            .post(url, data, {
                headers: { Accept: "application/json" }
            })
            .then(response => {
                dispatch(operationComplete());
                dispatch(loadList());
            })
            .catch(error => {
                if (error.response) {
                    notify(
                        {
                            closeOnClick: true,
                            closeOnOutsideClick: true,
                            message: "Не удалось сохранить пользователя"
                        },
                        "error"
                    );
                } else {
                    notify(
                        {
                            closeOnClick: true,
                            closeOnOutsideClick: true,
                            message: "Не удалось сохранить пользователя"
                        },
                        "error"
                    );
                }
            });
    };
}

export function loadPersonCard(id) {
    return dispatch => {
        const url = `/work/api/person/${id}/card`;
        dispatch(operationPending());
        return axios
            .get(url, {
                headers: { Accept: "application/json" }
            })
            .then(response => {
                dispatch(operationComplete());
                dispatch(setCardData(response.data));
            })
            .catch(error => {
                if (error.response) {
                    notify(
                        {
                            closeOnClick: true,
                            closeOnOutsideClick: true,
                            message: "Не удалось загрузить данные пользователя"
                        },
                        "error"
                    );
                } else {
                    notify(
                        {
                            closeOnClick: true,
                            closeOnOutsideClick: true,
                            message: "Не удалось загрузить данные пользователя"
                        },
                        "error"
                    );
                }
            });
    };
}

export function loadList() {
    return dispatch => {
        const url = `/work/api/person`;
        dispatch(operationPending());
        return axios
            .get(url, {
                headers: { Accept: "application/json" }
            })
            .then(response => {
                dispatch(operationComplete());
                dispatch(receiveListSuccess(response.data));
            })
            .catch(error => {
                if (error.response) {
                    notify(
                        {
                            closeOnClick: true,
                            closeOnOutsideClick: true,
                            message: "Не удалось загрузить данные пользователя"
                        },
                        "error"
                    );
                } else {
                    notify(
                        {
                            closeOnClick: true,
                            closeOnOutsideClick: true,
                            message: "Не удалось загрузить данные пользователя"
                        },
                        "error"
                    );
                }
            });
    };
}

export function deletePersons(ids) {
    return async dispatch => {
        const url = `/work/api/person`;
        dispatch(operationPending());
        const deletePromises = ids.map(id => {
            return axios.delete(`${url}/${id}`);
        });
        await Promise.all(deletePromises);
        dispatch(operationComplete());
        dispatch(loadList());
    };
}

export function loadPosts() {
    return async dispatch => {
        const url = "/work/api/dict/post";
        return axios
            .get(url, {
                headers: {
                    Accept: "application/json"
                }
            })
            .then(response => {
                dispatch(receivePostsSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                notify(
                    {
                        closeOnClick: true,
                        closeOnOutsideClick: true,
                        message: "Не удалось загрузить должности"
                    },
                    "error"
                );
            });
    };
}

export function uploadDocuments(documents) {
    return async (dispatch, getState) => {
        // const personId = getState().facilities.facilityFullInfo.info.id;
        const personId = getState().personView.id;
        const url = `/work/api/person/${personId}/main/document/attachment`;

        const response = await Promise.all(
            documents.map(document => {
                const data = new FormData();
                data.set("attachment", document);
                return axios
                    .post(url, data, {
                        headers: { Accept: "application/json" }
                    })
                    .then(response => {
                        dispatch(getAttachments());
                        console.log("Success");
                    })
                    .catch(error => {
                        console.log(error);
                        notify(
                            {
                                closeOnClick: true,
                                closeOnOutsideClick: true,
                                message: "Не удалось загрузить вложение"
                            },
                            "error"
                        );
                    });
            })
        );
    };
}

export function getAttachments() {
    return async (dispatch, getState) => {
        const personId = getState().personView.id;
        fetchDocumentAttachments(personId, dispatch);
    };
}
