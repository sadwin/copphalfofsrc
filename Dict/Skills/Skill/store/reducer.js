import types from './types'

const initialState = {
  toExpertizeRes: {},
  toPublishRes: {},

  fetchingSkillAll: false,
  skillAll: [],
  skillAllError: "",

  fetchingSkillAuthors: false,
  skillAuthors: [],
  skillAuthorsError: '',

  fetchingSkill: false,
  skill: {},
  skillError: "",

  fetchingSkillCard: false,
  skillCard: {},
  skillCardError: "",

  updatingSkill: false,
  updatedSkill: {},

  // isAddingSpecialities: false,
  // addedSpecialities: null,
  // addedSpecialitiesError: "",
  
  isDeletingSkill: false,
  deletedSkill: null,
  deletingSkillError: "",

  // isFetchingSpecialityGroup: false,
  // specialityGroup: [],
  // specialityGroupError: '',

  changeData: {
    "worldSkillId" : 1,
    "name" : "Фотография",
    "code" : "10",
    "typeId" : 1,
    "categoryId" : 1,
    "orgId" : 1,
    "description" : "Описание",
    "safety" : "Безпоасность",
    "safetyFirst" : "Перед началом",
    "teacherLevel" : "Среднее",
    "teacherStage" : "1 год",
    "teacherProf" : "Пекарь",
    "teacherExtra" : "Привествуется"
  },

  fetchingModuleList: false,
  moduleList: [],
  moduleListError: "",

  createModuleListRequest: false,
  createModuleListResponse: {},

  updateModuleRequest: false,
  updateModuleResponse: {},

  deleteModuleRequest: false,
  deleteModuleResponse: {},

  createScaleRequest: false,
  createScaleResponse: {},

  updateScaleRequest: false,
  updateScaleResponse: {},

  deleteScaleRequest: false,
  deleteScaleResponse: {},


  createRateRequest: false,
  createRateResponse: {},

  updateRateRequest: false,
  updateRateResponse: {},

  deleteRateRequest: false,
  deleteRateResponse: {},




  fetchingRoomList: false,
  roomList: [],
  roomListError: "",

  createRoomRequest: false,
  createRoomResponse: {},

  updateRoomRequest: false,
  updateRoomResponse: {},

  deleteRoomRequest: false,
  deleteRoomResponse: {},


  createResourceRequest: false,
  createResourceResponse: {},

  updateResourceRequest: false,
  updateResourceResponse: {},

  deleteResourceRequest: false,
  deleteResourceResponse: {},
}



export default (state = initialState, action) => {
  switch (action.type) {
      case types.SEND_TO_EXPERTIZE_RES: 
        return {
          ...state,
          toExpertizeRes: action.toExpertizeRes
      }
      case types.SEND_TO_PUBLISH_RES: 
        return {
          ...state,
          toPublishRes: action.toPublishRes
        }

      case types.CHANGE_UPDATE_DATA: 
        return {
          ...state,
          skill: action.skill

        }

      case types.GET_SKILLALL_REQUEST:
        return {
          ...state,
          fetchingSkillAll: action.fetchingSkillAll
        };
      case types.GET_SKILLALL_COMPLETED:
        return {
          ...state,
          fetchingSkillAll: action.fetchingSkillAll,
          skillAll: action.skillAll
        };
      case types.GET_SKILLALL_ERROR:
        return {
          ...state,
          fetchingSkillAll: action.fetchingSkillAll,
          skillAllError: action.skillAllError
        };
      
      case types.GET_SKILL_AUTHORS_REQUEST:
        return {
          ...state,
          fetchingSkillAuthors: action.fetchingSkillAuthors
        };
      case types.GET_SKILL_AUTHORS_COMPLETED:
        return {
          ...state,
          fetchingSkillAuthors: action.fetchingSkillAuthors,
          skillAuthors: action.skillAuthors
        };
      case types.GET_SKILL_AUTHORS_ERROR:
        return {
          ...state,
          fetchingSkillAuthors: action.fetchingSkillAuthors,
          skillAuthorsError: action.skillAuthorsError
        };


      case types.GET_SKILL_REQUEST:
      return {
        ...state,
        fetchingSkill: action.fetchingSkill
      };
    case types.GET_SKILL_COMPLETED:
      return {
        ...state,
        fetchingSkill: action.fetchingSkill,
        skill: action.skill
      };
    case types.GET_SKILL_ERROR:
      return {
        ...state,
        fetchingSkill: action.fetchingSkill,
        skillError: action.skillError
      };


      case types.UPDATE_SKILL_REQUEST:
        return {
          ...state,
          updatingSkill: action.updatingSkill
        };
      case types.UPDATE_SKILL_RESPONSE:
        return {
          ...state,
          updatingSkill: action.updatingSkill,
          updatedSkill: action.updatedSkill
        };

    case types.GET_SKILL_CARD_REQUEST:
      return {
        ...state,
        fetchingSkillCard: action.fetchingSkillCard
      };
    case types.GET_SKILL_CARD_COMPLETED:
      return {
        ...state,
        fetchingSkillCard: action.fetchingSkillCard,
        skillCard: action.skillCard
      };
    case types.GET_SKILL_CARD_ERROR:
      return {
        ...state,
        fetchingSkillCard: action.fetchingSkillCard,
        skillCardError: action.skillCardError
      };

    case types.DELETE_SKILL_REQUEST:
      return {
        ...state,
        isDeletingSkill: action.isDeletingSkill
      };
    case types.DELETE_SKILL_COMPLETED:
      return {
        ...state,
        isDeletingSkill: action.isDeletingSkill,
        deletedSkill: action.deletedSkill
      };
    case types.DELETE_SKILL_ERROR:
      return {
        ...state,
        isDeletingSkill: action.isDeletingSkill,
        deletingSkillError: action.deletingSkillError
      };

    case types.GET_MODULE_LIST_REQUEST:
      return {
        ...state,
        fetchingModuleList: action.fetchingModuleList
      };
    case types.GET_MODULE_LIST_COMPLETED:
      return {
        ...state,
        fetchingModuleList: action.fetchingModuleList,
        moduleList: action.moduleList
      };
    case types.GET_MODULE_LIST_ERROR:
      return {
        ...state,
        fetchingModuleList: action.fetchingModuleList,
        moduleListError: action.moduleListError
      };

    case types.CREATE_MODULE_LIST_REQUEST:
      return {
        ...state,
        createModuleListRequest: action.createModuleListRequest,
      };
    case types.CREATE_MODULE_LIST_ERROR:
      return {
        ...state,
        createModuleListRequest: action.createModuleListRequest,
        createModuleListResponse: action.createModuleListResponse
      };
    case types.UPDATE_MODULE_REQUEST:
      return {
        ...state,
        updateModuleRequest: action.updateModuleRequest,
      };
    case types.UPDATE_MODULE_RESPONSE:
      return {
        ...state,
        updateModuleRequest: action.updateModuleRequest,
        updateModuleResponse: action.updateModuleResponse
      };

    case types.DELETE_MODULE_REQUEST:
        return {
          ...state,
          deleteModuleRequest: action.deleteModuleRequest,
        };
    case types.DELETE_MODULE_RESPONSE:
        return {
          ...state,
          deleteModuleRequest: action.deleteModuleRequest,
          deleteModuleResponse: action.deleteModuleResponse
        };



        case types.CREATE_SCALE_REQUEST:
          return {
            ...state,
            createScaleRequest: action.createScaleRequest,
          };
        case types.CREATE_SCALE_RESPONSE:
          return {
            ...state,
            createScaleRequest: action.createScaleRequest,
            createScaleResponse: action.createScaleResponse
          };

        case types.UPDATE_SCALE_REQUEST:
            return {
              ...state,
              updateScaleRequest: action.updateScaleRequest,
            };
        case types.UPDATE_SCALE_RESPONSE:
            return {
              ...state,
              updateScaleRequest: action.updateScaleRequest,
              updateScaleResponse: action.updateScaleResponse
        };
        case types.DELETE_SCALE_REQUEST:
            return {
              ...state,
              deleteScaleRequest: action.deleteScaleRequest,
            };
        case types.DELETE_SCALE_RESPONSE:
          return {
            ...state,
            deleteScaleRequest: action.deleteScaleRequest,
            deleteScaleResponse: action.deleteScaleResponse
          };




        case types.CREATE_RATE_REQUEST:
          return {
            ...state,
            createRateRequest: action.createRateRequest,
          };
        case types.CREATE_RATE_RESPONSE:
          return {
            ...state,
            createRateRequest: action.createRateRequest,
            createRateResponse: action.createRateResponse
          };

        case types.UPDATE_RATE_REQUEST:
          return {
            ...state,
            updateRateRequest: action.updateRateRequest,
          };
        case types.UPDATE_RATE_RESPONSE:
          return {
            ...state,
            updateRateRequest: action.updateRateRequest,
            updateRateResponse: action.updateRateResponse
          };

        case types.DELETE_RATE_REQUEST:
            return {
              ...state,
              deleteRateRequest: action.deleteRateRequest,
            };
        case types.DELETE_RATE_RESPONSE:
            return {
              ...state,
              deleteRateRequest: action.deleteRateRequest,
              deleteRateResponse: action.deleteRateResponse
            };




        case types.GET_ROOMS_REQUEST:
          return {
            ...state,
            fetchingRoomList: action.fetchingRoomList
          };
        case types.GET_ROOMS_COMPLETED:
          return {
            ...state,
            fetchingRoomList: action.fetchingRoomList,
            roomList: action.roomList
          };
        case types.GET_ROOMS_ERROR:
          return {
            ...state,
            fetchingRoomList: action.fetchingRoomList,
            roomListError: action.roomListError
          };

        case types.CREATE_ROOMS_REQUEST:
            return {
              ...state,
              createRoomRequest: action.createRoomRequest,
            };
        case types.CREATE_ROOMS_RESPONSE:
            return {
              ...state,
              createRoomRequest: action.createRoomRequest,
              createRoomResponse: action.createRoomResponse
            };
        case types.UPDATE_ROOMS_REQUEST:
            return {
              ...state,
              updateRoomRequest: action.updateRoomRequest,
            };
        case types.UPDATE_ROOMS_RESPONSE:
            return {
              ...state,
              updateRoomRequest: action.updateRoomRequest,
              updateRoomResponse: action.updateRoomResponse
            };
        case types.DELETE_ROOMS_REQUEST:
            return {
              ...state,
              deleteRoomRequest: action.deleteRoomRequest,
            };
        case types.DELETE_ROOMS_RESPONSE:
            return {
              ...state,
              deleteRoomRequest: action.deleteRoomRequest,
              deleteRoomResponse: action.deleteRoomResponse
            };



        case types.CREATE_RESOURCE_REQUEST:
            return {
              ...state,
              createResourceRequest: action.createResourceRequest,
            };
        case types.CREATE_RESOURCE_RESPONSE:
            return {
              ...state,
              createResourceRequest: action.createResourceRequest,
              createResourceResponse: action.createResourceResponse
            };
        case types.UPDATE_RESOURCE_REQUEST:
            return {
              ...state,
              updateResourceRequest: action.updateResourceRequest,
            };
        case types.UPDATE_RESOURCE_RESPONSE:
            return {
              ...state,
              updateResourceRequest: action.updateResourceRequest,
              updateResourceResponse: action.updateResourceResponse
            };
        case types.DELETE_RESOURCE_REQUEST:
            return {
              ...state,
              deleteResourceRequest: action.deleteResourceRequest,
            };
        case types.DELETE_RESOURCE_RESPONSE:
            return {
              ...state,
              deleteResourceRequest: action.deleteResourceRequest,
              deleteResourceResponse: action.deleteResourceResponse
            };

    default:
      return state;
  }
}; 
