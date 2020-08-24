import {
    GET_SPECIALITYCOUNTER_REQUEST,
    GET_SPECIALITYCOUNTER_COMPLETED,
    GET_SPECIALITYCOUNTER_ERROR,

    GET_SKILLCOUNTER_REQUEST,
    GET_SKILLCOUNTER_COMPLETED,
    GET_SKILLCOUNTER_ERROR
} from './action'

const initialState = {
    isFetchingSpecialityCounter: false,
    specialityCounter: {},
    specialityCounterError: "",

    isFetchingSkillCounter: false,
    skillCounter: {},
    skillCounterError: "",
  }
  
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_SPECIALITYCOUNTER_REQUEST:
        return {
          ...state,
          isFetchingSpecialityCounter: action.isFetchingSpecialityCounter
        };
      case GET_SPECIALITYCOUNTER_COMPLETED:
        return {
          ...state,
          isFetchingSpecialityCounter: action.isFetchingSpecialityCounter,
          specialityCounter: action.specialityCounter
        };
      case GET_SPECIALITYCOUNTER_ERROR:
        return {
          ...state,
          isFetchingSpecialityCounter: action.isFetchingSpecialityCounter,
          specialityCounterError: action.specialityCounterError
        };

        case GET_SKILLCOUNTER_REQUEST:
            return {
              ...state,
              isFetchingSkillCounter: action.isFetchingSkillCounter
            };
          case GET_SKILLCOUNTER_COMPLETED:
            return {
              ...state,
              isFetchingSkillCounter: action.isFetchingSkillCounter,
              skillCounter: action.skillCounter
            };
          case GET_SKILLCOUNTER_ERROR:
            return {
              ...state,
              isFetchingSkillCounter: action.isFetchingSkillCounter,
              skillCounterError: action.skillCounterError
            };
      default:
        return state;
    }
  };