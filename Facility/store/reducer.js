import actions from "./actions";

export default (
  state = {
    isFetchingList: false,
    facilities: [],
    facilitiesListError: "",
    isFetchingFacility: false,
    facilityCard: null,
    facilityCardError: "",
    isFetchingFullFacility: false,
    facilityFullInfo: null,
    facilityFullError: "",
    isCreatingFacility: false,
    createdFacility: null,
    facilityCreationError: "",
    isUpdatingFacility: false,
    updatedFacility: null,
    facilityUpdateError: "",
    isDeletingFacilities: false,
    deletedFacilities: null,
    deletingFacilitiesError: "",
    isFetchingOrganizations: false,
    organizations: [],
    organizationsError: "",
    isFetchingMunicipals: false,
    municipals: [],
    municipalsError: "",
    isFetchingDepartments: false,
    departments: [],
    departmentsError: "",
    isEditingDepartments: false,
    editedDepartments: null,
    departmentsEditError: "",
    images: null,
    imagesError: ""
  },
  action
) => {
  switch (action.type) {
    case actions.GET_FACILITIES_REQUEST:
      return {
        ...state,
        isFetchingList: action.isFetchingList
      };
    case actions.GET_FACILITIES_COMPLETED:
      return {
        ...state,
        isFetchingList: action.isFetchingList,
        facilities: action.facilities
      };
    case actions.GET_FACILITIES_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        facilitiesError: action.facilitiesError
      };
    case actions.GET_FACILITY_REQUEST:
      return {
        ...state,
        isFetchingFacility: action.isFetchingFacility
      };
    case actions.GET_FACILITY_COMPLETED:
      return {
        ...state,
        isFetchingFacility: action.isFetchingFacility,
        facilityCard: action.facilityCard
      };
    case actions.GET_FACILITY_ERROR:
      return {
        ...state,
        isFetchingFacility: action.isFetchingFacility,
        facilityCardError: action.facilityCardError
      };
    case actions.GET_FULL_FACILITY_REQUEST:
      return {
        ...state,
        isFetchingFullFacility: action.isFetchingFullFacility
      };
    case actions.GET_FULL_FACILITY_COMPLETED:
      return {
        ...state,
        isFetchingFullFacility: action.isFetchingFullFacility,
        facilityFullInfo: action.facilityFullInfo
      };
    case actions.GET_FULL_FACILITY_ERROR:
      return {
        ...state,
        isFetchingFullFacility: action.isFetchingFullFacility,
        facilityFullError: action.facilityFullError
      };
    case actions.CREATE_FACILITY_REQUEST:
      return {
        ...state,
        isCreatingFacility: action.isCreatingFacility
      };
    case actions.CREATE_FACILITY_COMPLETED:
      return {
        ...state,
        isCreatingFacility: action.isCreatingFacility,
        createdFacility: action.createdFacility
      };
    case actions.CREATE_FACILITY_ERROR:
      return {
        ...state,
        isCreatingFacility: action.isCreatingFacility,
        facilityCreationError: action.facilityCreationError
      };
    case actions.UPDATE_FACILITY_REQUEST:
      return {
        ...state,
        isUpdatingFacility: action.isUpdatingFacility
      };
    case actions.UPDATE_FACILITY_COMPLETED:
      return {
        ...state,
        isUpdatingFacility: action.isUpdatingFacility,
        updatedFacility: action.updatedFacility
      };
    case actions.UPDATE_FACILITY_ERROR:
      return {
        ...state,
        isUpdatingFacility: action.isUpdatingFacility,
        facilityUpdateError: action.facilityUpdateError
      };
    case actions.DELETE_FACILITIES_REQUEST:
      return {
        ...state,
        isDeletingFacilities: action.isDeletingFacilities
      };
    case actions.DELETE_FACILITIES_COMPLETED:
      return {
        ...state,
        isDeletingFacilities: action.isDeletingFacilities,
        deletedFacilities: action.deletedFacilities
      };
    case actions.DELETE_FACILITIES_ERROR:
      return {
        ...state,
        isDeletingFacilities: action.isDeletingFacilities,
        deletingFacilitiesError: action.deletingFacilitiesError
      };
    default:
      return state;
    case actions.GET_ORGANIZATIONS_REQUEST:
      return {
        ...state,
        isFetchingOrganizations: action.isFetchingOrganizations
      };
    case actions.GET_ORGANIZATIONS_COMPLETED:
      return {
        ...state,
        isFetchingOrganizations: action.isFetchingOrganizations,
        organizations: action.organizations
      };
    case actions.GET_ORGANIZATIONS_ERROR:
      return {
        ...state,
        isFetchingOrganizations: action.isFetchingOrganizations,
        organizationsError: action.organizationsError
      };
    case actions.GET_MUNICIPALS_REQUEST:
      return {
        ...state,
        isFetchingMunicipals: action.isFetchingMunicipals
      };
    case actions.GET_MUNICIPALS_COMPLETED:
      return {
        ...state,
        isFetchingMunicipals: action.isFetchingMunicipals,
        municipals: action.municipals
      };
    case actions.GET_MUNICIPALS_ERROR:
      return {
        ...state,
        isFetchingMunicipals: action.isFetchingMunicipals,
        municipalsError: action.municipalsError
      };
    case actions.GET_DEPARTMENTS_REQUEST:
      return {
        ...state,
        isFetchingDepartments: action.isFetchingDepartments
      };
    case actions.GET_DEPARTMENTS_COMPLETED:
      return {
        ...state,
        isFetchingDepartments: action.isFetchingDepartments,
        departments: action.departments
      };
    case actions.GET_DEPARTMENTS_ERROR:
      return {
        ...state,
        isFetchingDepartments: action.isFetchingDepartments,
        departmentsError: action.departmentsError
      };
    case actions.EDIT_DEPARTMENTS_REQUEST:
      return {
        ...state,
        isEditingDepartments: action.isEditingDepartments
      };
    case actions.EDIT_DEPARTMENTS_COMPLETED:
      return {
        ...state,
        isAddingDepartments: action.isAddingDepartments,
        departmentsEdited: action.departmentsEdited
      };
    case actions.EDIT_DEPARTMENTS_ERROR:
      return {
        ...state,
        isAddingDepartments: action.isAddingDepartments,
        departmentsEditError: action.departmentsEditError
      };
    case actions.ADD_IMAGES_COMPLETED:
      return {
        ...state,
        images: action.images
      };
    case actions.ADD_IMAGES_ERROR:
      return {
        ...state,
        imagesError: action.imagesError
      };
  }
};
