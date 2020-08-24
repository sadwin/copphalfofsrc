export const PERSON_NAVIGATED = "PERSON_NAVIGATED";
export const PERSON_OPERATION_PENDING = "PERSON_OPERATION_PENDING";
export const PERSON_OPERATION_COMPLETE = "PERSON_OPERATION_COMPLETE";
export const PERSON_OPERATION_ABORT = "PERSON_OPERATION_ABORT";
export const PERSON_FETCH_DATA_SUCCESS = "PERSON_FETCH_DATA_SUCCESS";
export const PERSON_FETCH_DATA_ERROR = "PERSON_FETCH_DATA_ERROR";
export const PERSON_RECEIVE_MAIN_DATA_COMPLETE =
    "PERSON_RECEIVE_MAIN_DATA_COMPLETE";
export const PERSON_RECEIVE_REVISIONS_DATA_COMPLETE =
    "PERSON_RECEIVE_REVISIONS_DATA_COMPLETE";
export const PERSON_RECEIVE_REVISIONS_DATA_FORBIDDEN =
    "PERSON_RECEIVE_REVISIONS_DATA_FORBIDDEN";
export const PERSON_RECEIVE_REVISIONS_DATA_ERROR =
    "PERSON_RECEIVE_REVISIONS_DATA_ERROR";
export const PERSON_RECEIVE_DOCUMENT_ATTACHMENTS_COMPLETE =
    "PERSON_RECEIVE_DOCUMENT_ATTACHMENTS_COMPLETE";
export const PERSON_RECEIVE_DOCUMENT_ATTACHMENTS_FORBIDDEN =
    "PERSON_RECEIVE_DOCUMENT_ATTACHMENTS_FORBIDDEN";
export const PERSON_RECEIVE_DOCUMENT_ATTACHMENTS_ERROR =
    "PERSON_RECEIVE_DOCUMENT_ATTACHMENTS_ERROR";
export const PERSON_RECEIVE_SKILL_STATES_DATA_COMPLETE =
    "PERSON_RECEIVE_SKILL_STATES_DATA_COMPLETE";
export const PERSON_RECEIVE_SKILL_STATES_DATA_FORBIDDEN =
    "PERSON_RECEIVE_SKILL_STATES_DATA_FORBIDDEN";
export const PERSON_RECEIVE_SKILL_STATES_DATA_ERROR =
    "PERSON_RECEIVE_SKILL_STATES_DATA_ERROR";
export const PERSON_RECEIVE_WORLD_SKILLS_DATA_COMPLETE =
    "PERSON_RECEIVE_WORLD_SKILLS_DATA_COMPLETE";
export const PERSON_RECEIVE_WORLD_SKILLS_DATA_FORBIDDEN =
    "PERSON_RECEIVE_WORLD_SKILLS_DATA_FORBIDDEN";
export const PERSON_RECEIVE_WORLD_SKILLS_DATA_ERROR =
    "PERSON_RECEIVE_WORLD_SKILLS_DATA_ERROR";

export const PERSON_SET_MAIN_DATA_LAST_NAME = "PERSON_SET_MAIN_DATA_LAST_NAME";
export const PERSON_SET_MAIN_DATA_FIRST_NAME =
    "PERSON_SET_MAIN_DATA_FIRST_NAME";
export const PERSON_SET_MAIN_DATA_MIDDLE_NAME =
    "PERSON_SET_MAIN_DATA_MIDDLE_NAME";

export const PERSON_SET_MAIN_DATA_LAST_NAME_R =
    "PERSON_SET_MAIN_DATA_LAST_NAME_R";
export const PERSON_SET_MAIN_DATA_FIRST_NAME_R =
    "PERSON_SET_MAIN_DATA_FIRST_NAME_R";
export const PERSON_SET_MAIN_DATA_MIDDLE_NAME_R =
    "PERSON_SET_MAIN_DATA_MIDDLE_NAME_R";

export const PERSON_SET_MAIN_DATA_LAST_NAME_D =
    "PERSON_SET_MAIN_DATA_LAST_NAME_D";
export const PERSON_SET_MAIN_DATA_FIRST_NAME_D =
    "PERSON_SET_MAIN_DATA_FIRST_NAME_D";
export const PERSON_SET_MAIN_DATA_MIDDLE_NAME_D =
    "PERSON_SET_MAIN_DATA_MIDDLE_NAME_D";

export const PERSON_SET_MAIN_DATA_SEX = "PERSON_SET_MAIN_DATA_SEX";
export const PERSON_SET_MAIN_DATA_BIRTHDAY = "PERSON_SET_MAIN_DATA_BIRTHDAY";
export const PERSON_SET_MAIN_DATA_SNILS = "PERSON_SET_MAIN_DATA_SNILS";
export const PERSON_SET_MAIN_DATA_INN = "PERSON_SET_MAIN_DATA_INN";

export const PERSON_SET_MAIN_DATA_PHONE = "PERSON_SET_MAIN_DATA_PHONE";
export const PERSON_SET_MAIN_DATA_PHONE_EXTRA =
    "PERSON_SET_MAIN_DATA_PHONE_EXTRA";
export const PERSON_SET_MAIN_DATA_EMAIL = "PERSON_SET_MAIN_DATA_EMAIL";

export const PERSON_SET_MAIN_DATA_LEGAL_ADDRESS =
    "PERSON_SET_MAIN_DATA_LEGAL_ADDRESS";
export const PERSON_SET_MAIN_DATA_POST_ADDRESS =
    "PERSON_SET_MAIN_DATA_POST_ADDRESS";
export const PERSON_SET_MAIN_DATA_REGION = "PERSON_SET_MAIN_DATA_REGION";
export const PERSON_SET_MAIN_DATA_MUNICIPAL = "PERSON_SET_MAIN_DATA_MUNICIPAL";
export const PERSON_SET_MAIN_DATA_MUNICIPALS =
    "PERSON_SET_MAIN_DATA_MUNICIPALS";

export const PERSON_SET_MAIN_DATA_DOCUMENT_DOC_TYPE =
    "PERSON_SET_MAIN_DATA_DOCUMENT_DOC_TYPE";
export const PERSON_SET_MAIN_DATA_DOCUMENT_SERIES =
    "PERSON_SET_MAIN_DATA_DOCUMENT_SERIES";
export const PERSON_SET_MAIN_DATA_DOCUMENT_NUMBER =
    "PERSON_SET_MAIN_DATA_DOCUMENT_NUMBER";
export const PERSON_SET_MAIN_DATA_DOCUMENT_ISSUE_ORGAN =
    "PERSON_SET_MAIN_DATA_DOCUMENT_ISSUE_ORGAN";
export const PERSON_SET_MAIN_DATA_DOCUMENT_DATE =
    "PERSON_SET_MAIN_DATA_DOCUMENT_DATE";
export const PERSON_SET_MAIN_DATA_DOCUMENT_ISSUE_CODE =
    "PERSON_SET_MAIN_DATA_DOCUMENT_ISSUE_CODE";

export const PERSON_SET_MAIN_DATA_CASE_VISIBLE =
    "PERSON_SET_MAIN_DATA_CASE_VISIBLE";
export const PERSON_SET_DOCUMENT_ATTACHMENTS_VISIBLE =
    "PERSON_SET_DOCUMENT_ATTACHMENTS_VISIBLE";

export const PERSON_FETCH_CARD_DATA_SUCCESS = "PERSON_FETCH_CARD_DATA_SUCCESS";
export const PERSON_FETCH_CARD_DATA_ERROR = "PERSON_FETCH_DATA_ERROR";

export const PERSON_RECIVE_LIST_SUCCESS = "PERSON_RECIVE_LIST__SUCCESS";

export const PERSON_FETCH_POSTS_SUCCESS = "PERSON_FETCH_POSTS_SUCCESS";
export const PERSON_FETCH_POSTS_ERROR = "PERSON_FETCH_POSTS_ERROR";

export function navigated(id) {
    return {
        type: PERSON_NAVIGATED,
        payload: {
            id: id
        }
    };
}

export function operationPending() {
    return {
        type: PERSON_OPERATION_PENDING
    };
}

export function operationAbort() {
    return {
        type: PERSON_OPERATION_ABORT
    };
}

export function operationComplete() {
    return {
        type: PERSON_OPERATION_COMPLETE
    };
}

export function fetchDataSuccess() {
    return {
        type: PERSON_FETCH_DATA_SUCCESS
    };
}

export function fetchDataError(viewState) {
    return {
        type: PERSON_FETCH_DATA_ERROR,
        payload: {
            viewState: viewState
        }
    };
}

export function receiveMainDataComplete(
    mainData,
    mainDataSexes,
    mainDataRegions,
    mainDataMunicipals,
    mainDataDocumentDocTypes
) {
    return {
        type: PERSON_RECEIVE_MAIN_DATA_COMPLETE,
        payload: {
            mainData,
            mainDataSexes,
            mainDataRegions,
            mainDataMunicipals,
            mainDataDocumentDocTypes
        }
    };
}

export function receiveRevisionsDataComplete(revisionsData) {
    return {
        type: PERSON_RECEIVE_REVISIONS_DATA_COMPLETE,
        payload: {
            revisionsData
        }
    };
}

export function receiveRevisionsDataForbidden() {
    return {
        type: PERSON_RECEIVE_REVISIONS_DATA_FORBIDDEN
    };
}

export function receiveRevisionsDataError() {
    return {
        type: PERSON_RECEIVE_REVISIONS_DATA_ERROR
    };
}

export function receiveDocumentAttachmentsComplete(documentAttachments) {
    return {
        type: PERSON_RECEIVE_DOCUMENT_ATTACHMENTS_COMPLETE,
        payload: {
            documentAttachments
        }
    };
}

export function receiveDocumentAttachmentsForbidden() {
    return {
        type: PERSON_RECEIVE_DOCUMENT_ATTACHMENTS_FORBIDDEN
    };
}

export function receiveDocumentAttachmentsError() {
    return {
        type: PERSON_RECEIVE_DOCUMENT_ATTACHMENTS_ERROR
    };
}

export function receiveSkillStatesDataComplete(skillStatesData) {
    return {
        type: PERSON_RECEIVE_SKILL_STATES_DATA_COMPLETE,
        payload: {
            skillStatesData
        }
    };
}

export function receiveSkillStatesDataForbidden() {
    return {
        type: PERSON_RECEIVE_SKILL_STATES_DATA_FORBIDDEN
    };
}

export function receiveSkillStatesDataError() {
    return {
        type: PERSON_RECEIVE_SKILL_STATES_DATA_ERROR
    };
}

export function receiveWorldSkillsDataComplete(worldSkillsData) {
    return {
        type: PERSON_RECEIVE_WORLD_SKILLS_DATA_COMPLETE,
        payload: {
            worldSkillsData
        }
    };
}

export function receiveWorldSkillsDataForbidden() {
    return {
        type: PERSON_RECEIVE_WORLD_SKILLS_DATA_FORBIDDEN
    };
}

export function receiveWorldSkillsDataError() {
    return {
        type: PERSON_RECEIVE_WORLD_SKILLS_DATA_ERROR
    };
}

export function setMainDataLastName(value) {
    return {
        type: PERSON_SET_MAIN_DATA_LAST_NAME,
        payload: {
            value: value
        }
    };
}

export function setMainDataFirstName(value) {
    return {
        type: PERSON_SET_MAIN_DATA_FIRST_NAME,
        payload: {
            value: value
        }
    };
}

export function setMainDataMiddleName(value) {
    return {
        type: PERSON_SET_MAIN_DATA_MIDDLE_NAME,
        payload: {
            value: value
        }
    };
}

export function setMainDataLastNameR(value) {
    return {
        type: PERSON_SET_MAIN_DATA_LAST_NAME_R,
        payload: {
            value: value
        }
    };
}

export function setMainDataFirstNameR(value) {
    return {
        type: PERSON_SET_MAIN_DATA_FIRST_NAME_R,
        payload: {
            value: value
        }
    };
}

export function setMainDataMiddleNameR(value) {
    return {
        type: PERSON_SET_MAIN_DATA_MIDDLE_NAME_R,
        payload: {
            value: value
        }
    };
}

export function setMainDataLastNameD(value) {
    return {
        type: PERSON_SET_MAIN_DATA_LAST_NAME_D,
        payload: {
            value: value
        }
    };
}

export function setMainDataFirstNameD(value) {
    return {
        type: PERSON_SET_MAIN_DATA_FIRST_NAME_D,
        payload: {
            value: value
        }
    };
}

export function setMainDataMiddleNameD(value) {
    return {
        type: PERSON_SET_MAIN_DATA_MIDDLE_NAME_D,
        payload: {
            value: value
        }
    };
}

export function setMainDataSex(value) {
    return {
        type: PERSON_SET_MAIN_DATA_SEX,
        payload: {
            value: value
        }
    };
}

export function setMainDataBirthday(value) {
    return {
        type: PERSON_SET_MAIN_DATA_BIRTHDAY,
        payload: {
            value: value
        }
    };
}

export function setMainDataSnils(value) {
    return {
        type: PERSON_SET_MAIN_DATA_SNILS,
        payload: {
            value: value
        }
    };
}

export function setMainDataInn(value) {
    return {
        type: PERSON_SET_MAIN_DATA_INN,
        payload: {
            value: value
        }
    };
}

export function setMainDataPhone(value) {
    return {
        type: PERSON_SET_MAIN_DATA_PHONE,
        payload: {
            value: value
        }
    };
}

export function setMainDataPhoneExtra(value) {
    return {
        type: PERSON_SET_MAIN_DATA_PHONE_EXTRA,
        payload: {
            value: value
        }
    };
}

export function setMainDataEmail(value) {
    return {
        type: PERSON_SET_MAIN_DATA_EMAIL,
        payload: {
            value: value
        }
    };
}

export function setMainDataLegalAddress(value) {
    return {
        type: PERSON_SET_MAIN_DATA_LEGAL_ADDRESS,
        payload: {
            value: value
        }
    };
}

export function setMainDataPostAddress(value) {
    return {
        type: PERSON_SET_MAIN_DATA_POST_ADDRESS,
        payload: {
            value: value
        }
    };
}

export function setMainDataRegion(value) {
    return {
        type: PERSON_SET_MAIN_DATA_REGION,
        payload: {
            value: value
        }
    };
}

export function setMainDataMunicipal(value) {
    return {
        type: PERSON_SET_MAIN_DATA_MUNICIPAL,
        payload: {
            value: value
        }
    };
}

export function setMainDataMunicipals(mainDataMunicipals) {
    return {
        type: PERSON_SET_MAIN_DATA_MUNICIPALS,
        payload: {
            mainDataMunicipals: mainDataMunicipals
        }
    };
}

export function setMainDataDocumentDocType(value) {
    return {
        type: PERSON_SET_MAIN_DATA_DOCUMENT_DOC_TYPE,
        payload: {
            value: value
        }
    };
}

export function setMainDataDocumentSeries(value) {
    return {
        type: PERSON_SET_MAIN_DATA_DOCUMENT_SERIES,
        payload: {
            value: value
        }
    };
}

export function setMainDataDocumentNumber(value) {
    return {
        type: PERSON_SET_MAIN_DATA_DOCUMENT_NUMBER,
        payload: {
            value: value
        }
    };
}

export function setMainDataDocumentIssueOrgan(value) {
    return {
        type: PERSON_SET_MAIN_DATA_DOCUMENT_ISSUE_ORGAN,
        payload: {
            value: value
        }
    };
}

export function setMainDataDocumentDate(value) {
    return {
        type: PERSON_SET_MAIN_DATA_DOCUMENT_DATE,
        payload: {
            value: value
        }
    };
}

export function setMainDataDocumentIssueCode(value) {
    return {
        type: PERSON_SET_MAIN_DATA_DOCUMENT_ISSUE_CODE,
        payload: {
            value: value
        }
    };
}

export function setMainDataCaseVisible(visible) {
    return {
        type: PERSON_SET_MAIN_DATA_CASE_VISIBLE,
        payload: {
            visible: visible
        }
    };
}

export function setDocumentAttachmentsVisible(visible) {
    return {
        type: PERSON_SET_DOCUMENT_ATTACHMENTS_VISIBLE,
        payload: {
            visible: visible
        }
    };
}

// export const PERSON_FETCH_CARD_DATA_SUCCESS = "PERSON_FETCH_CARD_DATA_SUCCESS";
// export const PERSON_FETCH_CARD_DATA_ERROR = "PERSON_FETCH_DATA_ERROR";

export function setCardData(payload) {
    return {
        type: PERSON_FETCH_CARD_DATA_SUCCESS,
        payload
    };
}

export function receiveListSuccess(payload) {
    return {
        type: PERSON_RECIVE_LIST_SUCCESS,
        payload
    };
}

export function receivePostsSuccess(payload) {
    return {
        type: PERSON_FETCH_POSTS_SUCCESS,
        payload
    };
}
