import {
  GET_SPECIALITIES_REQUEST,
  GET_SPECIALITIES_COMPLETED,
  GET_SPECIALITIES_ERROR,

  ADD_SPECIALITIES_REQUEST,
  ADD_SPECIALITIES_COMPLETED,
  ADD_SPECIALITIES_ERROR,

  DELETE_SPECIALITIES_REQUEST,
  DELETE_SPECIALITIES_COMPLETED,
  DELETE_SPECIALITIES_ERROR,

  GET_SPECIALITYGROUP_REQUEST,
  GET_SPECIALITYGROUP_COMPLETED,
  GET_SPECIALITYGROUP_ERROR
} from './types'

const initialState = {
  isFetchingList: false,
  specialities: [],
  specialitiesError: "",

  isAddingSpecialities: false,
  addedSpecialities: null,
  addedSpecialitiesError: "",
  
  isDeletingSpecialities: false,
  deletedSpecialities: null,
  deletingSpecialitiesError: "",

  isFetchingSpecialityGroup: false,
  specialityGroup: [],
  specialityGroupError: '',
}


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SPECIALITIES_REQUEST:
      return {
        ...state,
        isFetchingList: action.isFetchingList
      };
    case GET_SPECIALITIES_COMPLETED:
      return {
        ...state,
        isFetchingList: action.isFetchingList,
        specialities: action.specialities
      };
    case GET_SPECIALITIES_ERROR:
      return {
        ...state,
        isFetchingList: action.isFetching,
        specialitiesError: action.specialitiesError
      };

    case ADD_SPECIALITIES_REQUEST:
      return {
        ...state,
        isAddingSpecialities: action.isAddingSpecialities
      };
    case ADD_SPECIALITIES_COMPLETED:
      return {
        ...state,
        isAddingSpecialities: action.isAddingSpecialities,
        addedSpecialities: action.addedSpecialities
      };
    case ADD_SPECIALITIES_ERROR:
      return {
        ...state,
        isAddingSpecialities: action.isAddingSpecialities,
        addedSpecialitiesError: action.addedSpecialitiesError
      };


    case DELETE_SPECIALITIES_REQUEST:
      return {
        ...state,
        isDeletingSpecialities: action.isDeletingSpecialities
      };
    case DELETE_SPECIALITIES_COMPLETED:
      return {
        ...state,
        isDeletingSpecialities: action.isDeletingSpecialities,
        deletedSpecialities: action.deletedSpecialities
      };
    case DELETE_SPECIALITIES_ERROR:
      return {
        ...state,
        isDeletingSpecialities: action.isDeletingSpecialities,
        deletingSpecialitiesError: action.deletingSpecialitiesError
      };

      case   GET_SPECIALITYGROUP_REQUEST:
        return {
          ...state,
          isFetchingSpecialityGroup: action.isFetchingSpecialityGroup
        };
      case GET_SPECIALITYGROUP_COMPLETED:
        return {
          ...state,
          isFetchingSpecialityGroup: action.isFetchingSpecialityGroup,
          specialityGroup: action.specialityGroup
        };
      case GET_SPECIALITYGROUP_ERROR:
        return {
          ...state,
          isFetchingSpecialityGroup: action.isFetchingSpecialityGroup,
          specialityGroupError: action.specialityGroupError
        };
    default:
      return state;
  }
};
