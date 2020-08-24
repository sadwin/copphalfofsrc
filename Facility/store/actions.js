import api from "../api/facilities";
import notify from "devextreme/ui/notify";

const logError = message =>
  notify(
    {
      closeOnClick: true,
      closeOnOutsideClick: true,
      message
    },
    "error"
  );

const logSuccess = message =>
  notify(
    {
      closeOnClick: true,
      closeOnOutsideClick: true,
      message
    },
    "success"
  );

// FACILITIES
const GET_FACILITIES_REQUEST = "GET_FACILITIES_REQUEST";
const GET_FACILITIES_COMPLETED = "GET_FACILITIES_COMPLETED";
const GET_FACILITIES_ERROR = "GET_FACILITIES_ERROR";

const GET_FACILITY_REQUEST = "GET_FACILITY_REQUEST";
const GET_FACILITY_COMPLETED = "GET_FACILITY_COMPLETED";
const GET_FACILITY_ERROR = "GET_FACILITY_ERROR";

const UPDATE_FACILITY_REQUEST = "UPDATE_FACILITY_REQUEST";
const UPDATE_FACILITY_COMPLETED = "UPDATE_FACILITY_COMPLETED";
const UPDATE_FACILITY_ERROR = "UPDATE_FACILITY_ERROR";

const GET_FULL_FACILITY_REQUEST = "GET_FULL_FACILITY_REQUEST";
const GET_FULL_FACILITY_COMPLETED = "GET_FULL_FACILITY_COMPLETED";
const GET_FULL_FACILITY_ERROR = "GET_FULL_FACILITY_ERROR";

const CREATE_FACILITY_REQUEST = "CREATE_FACILITY_REQUEST";
const CREATE_FACILITY_COMPLETED = "CREATE_FACILITY_COMPLETED";
const CREATE_FACILITY_ERROR = "CREATE_FACILITY_ERROR";

const DELETE_FACILITIES_REQUEST = "DELETE_FACILITIES_REQUEST";
const DELETE_FACILITIES_COMPLETED = "DELETE_FACILITIES_COMPLETED";
const DELETE_FACILITIES_ERROR = "DELETE_FACILITIES_ERROR";

const GET_ORGANIZATIONS_REQUEST = "GET_ORGANIZATIONS_REQUEST";
const GET_ORGANIZATIONS_COMPLETED = "GET_ORGANIZATIONS_COMPLETED";
const GET_ORGANIZATIONS_ERROR = "GET_ORGANIZATIONS_ERROR";

const GET_MUNICIPALS_REQUEST = "GET_MUNICIPALS_REQUEST";
const GET_MUNICIPALS_COMPLETED = "GET_MUNICIPALS_COMPLETED";
const GET_MUNICIPALS_ERROR = "GET_MUNICIPALS_ERROR";

const GET_DEPARTMENTS_REQUEST = "GET_DEPARTMENTS_REQUEST";
const GET_DEPARTMENTS_COMPLETED = "GET_DEPARTMENTS_COMPLETED";
const GET_DEPARTMENTS_ERROR = "GET_DEPARTMENTS_ERROR";

const EDIT_DEPARTMENTS_REQUEST = "EDIT_DEPARTMENTS_REQUEST";
const EDIT_DEPARTMENTS_COMPLETED = "EDIT_DEPARTMENTS_COMPLETED";
const EDIT_DEPARTMENTS_ERROR = "EDIT_DEPARTMENTS_ERROR";

const ADD_IMAGES_COMPLETED = "ADD_IMAGES_COMPLETED";
const ADD_IMAGES_ERROR = "ADD_IMAGES_ERROR";

function requestFacilities() {
  return {
    type: GET_FACILITIES_REQUEST,
    isFetchingList: true
  };
}

function requestFacilitiesCompleted(facilities) {
  return {
    type: GET_FACILITIES_COMPLETED,
    isFetchingList: false,
    facilities
  };
}

function requestFacilitiesError(facilitiesError) {
  return {
    type: GET_FACILITIES_ERROR,
    isFetchingList: false,
    facilitiesError
  };
}

function requestFacility() {
  return {
    type: GET_FACILITY_REQUEST,
    isFetchingFacility: true
  };
}

function requestFacilityCompleted(facilityCard) {
  return {
    type: GET_FACILITY_COMPLETED,
    isFetchingFacility: false,
    facilityCard
  };
}

function requestFacilityError(facilityCardError) {
  return {
    type: GET_FACILITY_ERROR,
    isFetchingFacility: false,
    facilityCardError
  };
}

function requestFullFacility() {
  return {
    type: GET_FULL_FACILITY_REQUEST,
    isFetchingFullFacility: true
  };
}

function requestFullFacilityCompleted(facilityFullInfo) {
  return {
    type: GET_FULL_FACILITY_COMPLETED,
    isFetchingFullFacility: false,
    facilityFullInfo
  };
}

function requestFullFacilityError(facilityFullError) {
  return {
    type: GET_FULL_FACILITY_ERROR,
    isFetchingFullFacility: false,
    facilityFullError
  };
}

function createFacilityRequest() {
  return {
    type: CREATE_FACILITY_REQUEST,
    isCreatingFacility: true
  };
}

function createFacilityCompleted(createdFacility) {
  return {
    type: CREATE_FACILITY_COMPLETED,
    isCreatingFacility: false,
    createdFacility
  };
}

function createFacilityError(facilityCreationError) {
  return {
    type: CREATE_FACILITY_ERROR,
    isCreatingFacility: false,
    facilityCreationError
  };
}

function updateFacilityRequest() {
  return {
    type: UPDATE_FACILITY_REQUEST,
    isUpdatingFacility: true
  };
}

function updateFacilityCompleted(updatedFacility) {
  return {
    type: UPDATE_FACILITY_COMPLETED,
    isUpdatingFacility: false,
    updatedFacility
  };
}

function updateFacilityError(facilityUpdateError) {
  return {
    type: UPDATE_FACILITY_ERROR,
    isUpdatingFacility: false,
    facilityUpdateError
  };
}

function deleteFacilitiesRequest() {
  return {
    type: DELETE_FACILITIES_REQUEST,
    isDeletingFacilities: true
  };
}

function deleteFacilitiesCompleted(deletedFacilities) {
  return {
    type: DELETE_FACILITIES_COMPLETED,
    isDeletingFacilities: false,
    deletedFacilities
  };
}

function deleteFacilitiesError(deletingFacilitiesError) {
  return {
    type: DELETE_FACILITIES_ERROR,
    isDeletingFacilities: false,
    deletingFacilitiesError
  };
}

function requestOrganizations() {
  return {
    type: GET_ORGANIZATIONS_REQUEST,
    isFetchingOrganizations: true
  };
}

function requestOrganizationsCompleted(organizations) {
  return {
    type: GET_ORGANIZATIONS_COMPLETED,
    isFetchingOrganizations: false,
    organizations
  };
}

function requestOrganizationsError(organizationsError) {
  return {
    type: GET_ORGANIZATIONS_ERROR,
    isFetchingOrganizations: false,
    organizationsError
  };
}

function requestMunicipals() {
  return {
    type: GET_MUNICIPALS_REQUEST,
    isFetchingMunicipals: true
  };
}

function requestMunicipalsCompleted(municipals) {
  return {
    type: GET_MUNICIPALS_COMPLETED,
    isFetchingMunicipals: false,
    municipals
  };
}

function requestMunicipalsError(municipalsError) {
  return {
    type: GET_MUNICIPALS_ERROR,
    isFetchingMunicipals: false,
    municipalsError
  };
}

function requestDepartments() {
  return {
    type: GET_DEPARTMENTS_REQUEST,
    isFetchingDepartments: true
  };
}

function requestDepartmentsCompleted(departments) {
  return {
    type: GET_DEPARTMENTS_COMPLETED,
    isFetchingDepartments: false,
    departments
  };
}

function requestDepartmentsError(departmentsError) {
  return {
    type: GET_DEPARTMENTS_ERROR,
    isFetchingDepartments: false,
    departmentsError
  };
}

function editDepartmentsRequest() {
  return {
    type: EDIT_DEPARTMENTS_REQUEST,
    isEditingDepartments: true
  };
}

function editDepartmentsCompleted(departmentsEdited) {
  return {
    type: EDIT_DEPARTMENTS_COMPLETED,
    isEditingDepartments: false,
    departmentsEdited
  };
}

function editDepartmentsError(departmentsEditError) {
  return {
    type: EDIT_DEPARTMENTS_ERROR,
    isEditingDepartments: false,
    departmentsEditError
  };
}

function addImagesCompleted(images) {
  return {
    type: ADD_IMAGES_COMPLETED,
    images
  };
}

function addImagesError(imagesError) {
  return {
    type: ADD_IMAGES_ERROR,
    imagesError
  };
}

export function getFacilities() {
  return dispatch => {
    dispatch(requestFacilities());
    return api
      .getFacilitiesList()
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          dispatch(requestFacilitiesCompleted(response.data));
        } else {
          return Promise.reject(response);
        }
        return Promise.resolve();
      })
      .catch(err => {
        if (err.response.status === 400) {
          logError(err.response);
          dispatch(requestFacilitiesError(err.response));
        } else {
          logError(err);
        }
      });
  };
}

export function getFacility(id) {
  return dispatch => {
    dispatch(requestFacility());
    return api
      .getFacilityCard(id)
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          dispatch(requestFacilityCompleted(response.data));
        } else {
          return Promise.reject(response);
        }
        return Promise.resolve();
      })
      .catch(err => {
        if (err.response.status === 400) {
          logError(err.response);
          dispatch(requestFacilityError(err.response));
        } else {
          logError(err);
        }
      });
  };
}

export function getFullFacility(id) {
  return dispatch => {
    dispatch(requestFullFacility());
    return api
      .getFacilityFullInfo(id)
      .then(response => {
        if (response.status === 200) {
          let facility = response.data;
          facility = {
            ...facility,
            data: {
              ...facility.data,
              region: facility.info.regionId
            }
          };

          dispatch(requestFullFacilityCompleted(facility));
        } else {
          return Promise.reject(response);
        }
        return Promise.resolve();
      })
      .catch(err => {
        if (err.response.status === 400) {
          logError(err.response);
          dispatch(requestFullFacilityError(err.response));
        } else {
          logError(err);
        }
      });
  };
}

export function createFacility(data) {
  return dispatch => {
    dispatch(createFacilityRequest());
    return api
      .createFacility(data)
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          dispatch(createFacilityCompleted(response.data));
        } else {
          return Promise.reject(response);
        }
        return Promise.resolve();
      })
      .catch(err => {
        if (err.response.status === 400) {
          logError(err.response);
          dispatch(createFacilityError(err.response));
        } else {
          logError(err);
        }
      });
  };
}

export function updateFacility(id, data) {
  return (dispatch, getState) => {
    dispatch(updateFacilityRequest());
    return api
      .updateFacility(id, data)
      .then(response => {
        if (response.status === 200) {
          logSuccess("Успешно обновлено");
          dispatch(updateFacilityCompleted(response.data));
          dispatch(getFacility(getState().facilities.facilityCard.id));
        } else {
          return Promise.reject(response);
        }
        return Promise.resolve();
      })
      .catch(err => {
        if (err.response.status === 400) {
          logError(err.response);
          dispatch(updateFacilityError(err.response));
        } else {
          logError(err);
        }
      });
  };
}

export function deleteFacilities(facilities) {
  return async dispatch => {
    dispatch(deleteFacilitiesRequest());

    const response = await Promise.all(
      facilities.map(id => api.deleteFacility(id))
    );

    if (response.every(({ data }) => data.success == true)) {
      dispatch(deleteFacilitiesCompleted(response));
      dispatch(getFacilities());
    } else {
      dispatch(deleteFacilitiesError(response));
    }
    return response;
  };
}

export function getOrganizations() {
  return dispatch => {
    dispatch(requestOrganizations());
    return api
      .getOrganizationsList()
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          dispatch(requestOrganizationsCompleted(response.data));
        } else {
          return Promise.reject(response);
        }
        return Promise.resolve();
      })
      .catch(err => {
        if (err.response.status === 400) {
          logError(err.response);
          dispatch(requestOrganizationsError(err.response));
        } else {
          logError(err);
        }
      });
  };
}

export function getMunicipals(region) {
  return dispatch => {
    dispatch(requestMunicipals());
    return api
      .getMunicipalsList(region)
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          dispatch(requestMunicipalsCompleted(response.data));
        } else {
          return Promise.reject(response);
        }
        return Promise.resolve();
      })
      .catch(err => {
        if (err.response.status === 400) {
          logError(err.response);
          dispatch(requestMunicipalsError(err.response));
        } else {
          logError(err);
        }
      });
  };
}

export function getDepartments(id) {
  return dispatch => {
    dispatch(requestDepartments());
    return api
      .getFacilityDepartments(id)
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          dispatch(requestDepartmentsCompleted(response.data));
        } else {
          return Promise.reject(response);
        }
        return Promise.resolve();
      })
      .catch(err => {
        if (err.response.status === 400) {
          logError(err.response);
          dispatch(requestDepartmentsError(err.response));
        } else {
          logError(err);
        }
      });
  };
}

export function editDepartments(facilityId, deps) {
  return async dispatch => {
    dispatch(editDepartmentsRequest());
    const checked = deps.filter(({ checked }) => checked);
    const unchecked = deps.filter(({ checked }) => !checked);

    const response = await Promise.allSettled(
      [...checked.map(({ id }) => api.addFacilityDepartment(facilityId, id))],
      [
        ...unchecked.map(({ id }) =>
          api.deleteFacilityDepartment(facilityId, id)
        )
      ]
    );

    if (response.every(res => res.value.status === 200)) {
      dispatch(editDepartmentsCompleted(response));
    } else {
      dispatch(editDepartmentsError(response));
    }
    return response;
  };
}

export function addImages(images) {
  return async (dispatch, getState) => {
    const id = getState().facilities.facilityFullInfo.info.id;
    const response = await Promise.all(
      images.map(image => api.addFacilityImage(id, image))
    );

    if (response.every(({ data }) => data.success == true)) {
      dispatch(addImagesCompleted(response));
      dispatch(getFacility(id));
    } else {
      dispatch(addImagesError(response));
    }
    return response;
  };
}

export default {
  GET_FACILITIES_REQUEST,
  GET_FACILITIES_COMPLETED,
  GET_FACILITIES_ERROR,
  GET_FACILITY_REQUEST,
  GET_FACILITY_COMPLETED,
  GET_FACILITY_ERROR,
  GET_FULL_FACILITY_REQUEST,
  GET_FULL_FACILITY_COMPLETED,
  GET_FULL_FACILITY_ERROR,
  CREATE_FACILITY_REQUEST,
  CREATE_FACILITY_COMPLETED,
  CREATE_FACILITY_ERROR,
  UPDATE_FACILITY_REQUEST,
  UPDATE_FACILITY_COMPLETED,
  UPDATE_FACILITY_ERROR,
  DELETE_FACILITIES_REQUEST,
  DELETE_FACILITIES_COMPLETED,
  DELETE_FACILITIES_ERROR,
  GET_ORGANIZATIONS_REQUEST,
  GET_ORGANIZATIONS_COMPLETED,
  GET_ORGANIZATIONS_ERROR,
  GET_MUNICIPALS_REQUEST,
  GET_MUNICIPALS_COMPLETED,
  GET_MUNICIPALS_ERROR,
  GET_DEPARTMENTS_REQUEST,
  GET_DEPARTMENTS_COMPLETED,
  GET_DEPARTMENTS_ERROR,
  EDIT_DEPARTMENTS_REQUEST,
  EDIT_DEPARTMENTS_COMPLETED,
  EDIT_DEPARTMENTS_ERROR,
  ADD_IMAGES_COMPLETED,
  ADD_IMAGES_ERROR,

  getFacilities,
  getFacility,
  getFullFacility,
  createFacility,
  updateFacility,
  deleteFacilities,
  getOrganizations,
  getMunicipals,
  getDepartments,
  editDepartments,
  addImages
};
