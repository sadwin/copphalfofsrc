import {
    PERSON_NAVIGATED,
    PERSON_OPERATION_PENDING,
    PERSON_OPERATION_ABORT,
    PERSON_FETCH_DATA_SUCCESS,
    PERSON_FETCH_DATA_ERROR,
    PERSON_RECEIVE_MAIN_DATA_COMPLETE,
    PERSON_RECEIVE_REVISIONS_DATA_COMPLETE,
    PERSON_RECEIVE_REVISIONS_DATA_FORBIDDEN,
    PERSON_RECEIVE_REVISIONS_DATA_ERROR,
    PERSON_RECEIVE_DOCUMENT_ATTACHMENTS_COMPLETE,
    PERSON_RECEIVE_DOCUMENT_ATTACHMENTS_FORBIDDEN,
    PERSON_RECEIVE_DOCUMENT_ATTACHMENTS_ERROR,
    PERSON_SET_MAIN_DATA_FIRST_NAME,
    PERSON_SET_MAIN_DATA_LAST_NAME,
    PERSON_SET_MAIN_DATA_MIDDLE_NAME,
    PERSON_SET_MAIN_DATA_CASE_VISIBLE,
    PERSON_SET_MAIN_DATA_FIRST_NAME_R,
    PERSON_SET_MAIN_DATA_LAST_NAME_R,
    PERSON_SET_MAIN_DATA_MIDDLE_NAME_R,
    PERSON_SET_MAIN_DATA_FIRST_NAME_D,
    PERSON_SET_MAIN_DATA_LAST_NAME_D,
    PERSON_SET_MAIN_DATA_MIDDLE_NAME_D,
    PERSON_SET_MAIN_DATA_SEX,
    PERSON_SET_MAIN_DATA_BIRTHDAY,
    PERSON_SET_MAIN_DATA_SNILS,
    PERSON_SET_MAIN_DATA_INN,
    PERSON_SET_MAIN_DATA_PHONE,
    PERSON_SET_MAIN_DATA_PHONE_EXTRA,
    PERSON_SET_MAIN_DATA_EMAIL,
    PERSON_SET_MAIN_DATA_LEGAL_ADDRESS,
    PERSON_SET_MAIN_DATA_POST_ADDRESS,
    PERSON_SET_MAIN_DATA_REGION,
    PERSON_SET_MAIN_DATA_MUNICIPAL,
    PERSON_SET_MAIN_DATA_MUNICIPALS,
    PERSON_SET_DOCUMENT_ATTACHMENTS_VISIBLE,
    PERSON_SET_MAIN_DATA_DOCUMENT_DOC_TYPE,
    PERSON_SET_MAIN_DATA_DOCUMENT_NUMBER,
    PERSON_SET_MAIN_DATA_DOCUMENT_SERIES,
    PERSON_SET_MAIN_DATA_DOCUMENT_ISSUE_ORGAN,
    PERSON_SET_MAIN_DATA_DOCUMENT_DATE,
    PERSON_SET_MAIN_DATA_DOCUMENT_ISSUE_CODE,
    PERSON_OPERATION_COMPLETE,
    PERSON_RECEIVE_SKILL_STATES_DATA_COMPLETE,
    PERSON_RECEIVE_SKILL_STATES_DATA_FORBIDDEN,
    PERSON_RECEIVE_SKILL_STATES_DATA_ERROR,
    PERSON_RECEIVE_WORLD_SKILLS_DATA_COMPLETE,
    PERSON_RECEIVE_WORLD_SKILLS_DATA_FORBIDDEN,
    PERSON_RECEIVE_WORLD_SKILLS_DATA_ERROR,
    PERSON_FETCH_CARD_DATA_SUCCESS,
    PERSON_RECIVE_LIST_SUCCESS,
    PERSON_FETCH_POSTS_SUCCESS
} from "./actions";

const initialState = {
    id: null,
    viewState: 0,
    mainData: {},
    mainDataCaseVisible: false,
    mainDataSexes: [],
    mainDataRegions: [],
    mainDataMunicipals: [],
    mainDataDocumentDocTypes: [],
    mainDataChanged: false,
    mainDataPosts: [],
    documentAttachments: [],
    documentAttachmentsVisible: false,
    hasDocumentAttachments: false,
    revisionsData: [],
    hasRevisionsData: false,
    skillStatesData: [],
    hasSkillStatesData: false,
    worldSkillsData: [],
    hasWorldSkillsData: false,
    cardData: {},
    personsList: []
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case PERSON_NAVIGATED:
            return {
                ...initialState,
                id: action.payload.id
            };
        case PERSON_OPERATION_PENDING:
            return {
                ...state,
                viewState: 0
            };
        case PERSON_OPERATION_COMPLETE:
            return {
                ...state,
                viewState: 200
            };
        case PERSON_OPERATION_ABORT:
            return {
                ...state,
                viewState: 200
            };
        case PERSON_FETCH_DATA_SUCCESS:
            return {
                ...state,
                viewState: 200
            };
        case PERSON_FETCH_DATA_ERROR:
            return {
                ...state,
                viewState: action.payload.viewState
            };

        case PERSON_RECEIVE_MAIN_DATA_COMPLETE:
            console.log("PERSON_RECEIVE_MAIN_DATA_COMPLETE", action.payload);
            return {
                ...state,
                mainData: action.payload.mainData,
                mainDataSexes: action.payload.mainDataSexes,
                mainDataRegions: action.payload.mainDataRegions,
                mainDataMunicipals: action.payload.mainDataMunicipals,
                mainDataDocumentDocTypes:
                    action.payload.mainDataDocumentDocTypes,
                mainDataChanged: false
            };

        case PERSON_RECEIVE_DOCUMENT_ATTACHMENTS_COMPLETE:
            return {
                ...state,
                documentAttachments: action.payload.documentAttachments,
                hasDocumentAttachments: true
            };
        case PERSON_RECEIVE_DOCUMENT_ATTACHMENTS_FORBIDDEN:
            return {
                ...state,
                documentAttachments: [],
                hasDocumentAttachments: false
            };
        case PERSON_RECEIVE_DOCUMENT_ATTACHMENTS_ERROR:
            return {
                ...state,
                documentAttachments: [],
                hasDocumentAttachments: false
            };

        case PERSON_RECEIVE_SKILL_STATES_DATA_COMPLETE:
            return {
                ...state,
                skillStatesData: action.payload.skillStatesData,
                hasSkillStatesData: true
            };
        case PERSON_RECEIVE_SKILL_STATES_DATA_FORBIDDEN:
            return {
                ...state,
                skillStatesData: [],
                hasSkillStatesData: false
            };
        case PERSON_RECEIVE_SKILL_STATES_DATA_ERROR:
            return {
                ...state,
                skillStatesData: [],
                hasSkillStatesData: false
            };

        case PERSON_RECEIVE_WORLD_SKILLS_DATA_COMPLETE:
            return {
                ...state,
                worldSkillsData: action.payload.worldSkillsData,
                hasWorldSkillsData: true
            };
        case PERSON_RECEIVE_WORLD_SKILLS_DATA_FORBIDDEN:
            return {
                ...state,
                worldSkillsData: [],
                hasWorldSkillsData: false
            };
        case PERSON_RECEIVE_WORLD_SKILLS_DATA_ERROR:
            return {
                ...state,
                worldSkillsData: [],
                hasWorldSkillsData: false
            };

        case PERSON_RECEIVE_REVISIONS_DATA_COMPLETE:
            return {
                ...state,
                revisionsData: action.payload.revisionsData,
                hasRevisionsData: true
            };
        case PERSON_RECEIVE_REVISIONS_DATA_FORBIDDEN:
            return {
                ...state,
                revisionsData: [],
                hasRevisionsData: false
            };
        case PERSON_RECEIVE_REVISIONS_DATA_ERROR:
            return {
                ...state,
                revisionsData: [],
                hasRevisionsData: false
            };

        case PERSON_SET_MAIN_DATA_FIRST_NAME:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    firstName: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_LAST_NAME:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    lastName: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_MIDDLE_NAME:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    middleName: action.payload.value
                },
                mainDataChanged: true
            };

        case PERSON_SET_MAIN_DATA_FIRST_NAME_R:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    firstNameR: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_LAST_NAME_R:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    lastNameR: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_MIDDLE_NAME_R:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    middleNameR: action.payload.value
                },
                mainDataChanged: true
            };

        case PERSON_SET_MAIN_DATA_FIRST_NAME_D:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    firstNameD: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_LAST_NAME_D:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    lastNameD: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_MIDDLE_NAME_D:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    middleNameD: action.payload.value
                },
                mainDataChanged: true
            };

        case PERSON_SET_MAIN_DATA_SEX:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    sex: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_BIRTHDAY:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    birthday: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_SNILS:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    snils: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_INN:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    inn: action.payload.value
                },
                mainDataChanged: true
            };

        case PERSON_SET_MAIN_DATA_PHONE:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    phone: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_PHONE_EXTRA:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    phoneExtra: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_EMAIL:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    email: action.payload.value
                },
                mainDataChanged: true
            };

        case PERSON_SET_MAIN_DATA_LEGAL_ADDRESS:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    legalAddress: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_POST_ADDRESS:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    postAddress: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_REGION:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    region: action.payload.value,
                    municipal: null
                },
                mainDataMunicipals: [],
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_MUNICIPAL:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    municipal: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_MUNICIPALS:
            return {
                ...state,
                mainDataMunicipals: action.payload.mainDataMunicipals || []
            };

        case PERSON_SET_MAIN_DATA_DOCUMENT_DOC_TYPE:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    documentDocType: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_DOCUMENT_NUMBER:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    documentNumber: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_DOCUMENT_SERIES:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    documentSeries: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_DOCUMENT_ISSUE_ORGAN:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    documentIssueOrgan: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_DOCUMENT_DATE:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    documentDate: action.payload.value
                },
                mainDataChanged: true
            };
        case PERSON_SET_MAIN_DATA_DOCUMENT_ISSUE_CODE:
            return {
                ...state,
                mainData: {
                    ...state.mainData,
                    documentIssueCode: action.payload.value
                },
                mainDataChanged: true
            };

        case PERSON_SET_MAIN_DATA_CASE_VISIBLE:
            return {
                ...state,
                mainDataCaseVisible: action.payload.visible
            };
        case PERSON_SET_DOCUMENT_ATTACHMENTS_VISIBLE:
            return {
                ...state,
                documentAttachmentsVisible: action.payload.visible
            };
        case PERSON_FETCH_CARD_DATA_SUCCESS:
            return {
                ...state,
                cardData: action.payload
            };

        case PERSON_RECIVE_LIST_SUCCESS:
            return {
                ...state,
                personsList: action.payload
            };
        case PERSON_FETCH_POSTS_SUCCESS:
            return {
                ...state,
                mainDataPosts: action.payload
            };

        default:
            return state;
    }
}
