import { getSpecialitiesList, addSpecialities, deleteSpecialities, getSpecialityGroup} from "../api/specialities";
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

//GET
function requestSpecialities() {
  return {
    type: GET_SPECIALITIES_REQUEST,
    isFetchingList: true
  };
}

function requestSpecialitiesCompleted(specialities) {
  return {
    type: GET_SPECIALITIES_COMPLETED,
    isFetchingList: false,
    specialities
  };
}

function requestSpecialitiesError(specialitiesError) {
  return {
    type: GET_SPECIALITIES_ERROR,
    isFetching: false,
    specialitiesError
  };
}

export function getSpecialities() {
  return dispatch => {
    dispatch(requestSpecialities());
    return getSpecialitiesList()
      .then(response => {
        if (response.status === 200) {
          dispatch(requestSpecialitiesCompleted(response.data));
        } else {
          return Promise.reject(response);
        }
        return Promise.resolve();
      })
      .catch(err => {
        if (err.response.status === 404) {
          console.log(err.response);
          dispatch(requestSpecialitiesError(err.response));
        } else {
          console.log(err);
        }
      });
  };
}

//GET GROUP
function requestSpecialitiesGroup() {
  return {
    type: GET_SPECIALITYGROUP_REQUEST,
    isFetchingSpecialityGroup: true
  };
}

function requestSpecialitiesGroupCompleted(specialityGroup) {
  return {
    type: GET_SPECIALITYGROUP_COMPLETED,
    isFetchingSpecialityGroup: false,
    specialityGroup
  };
}

function requestSpecialitiesGroupError(specialityGroupError) {
  return {
    type: GET_SPECIALITYGROUP_ERROR,
    isFetchingSpecialityGroup: false,
    specialityGroupError
  };
}

export function getSpecialitiesGroupAction() {
  return dispatch => {
    dispatch(requestSpecialitiesGroup());
    return getSpecialityGroup()
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          dispatch(requestSpecialitiesGroupCompleted(response.data));
        } else {
          return Promise.reject(response);
        }
        return Promise.resolve();
      })
      .catch(err => {
        if (err.response.status === 404) {
          console.log(err.response);
          dispatch(requestSpecialitiesGroupError(err.response));
        } else {
          console.log(err);
        }
      });
  };
}


//ADD
function addSpecialititesRequest() {
  return {
    type: ADD_SPECIALITIES_REQUEST,
    isAddingSpecialities: true
  };
}

function addSpecialititesCompleted(addedSpecialities) {
  return {
    type: ADD_SPECIALITIES_COMPLETED,
    isAddingSpecialities: false,
    addedSpecialities
  };
}

function addSpecialititesError(addedSpecialitiesError) {
  return {
    type: ADD_SPECIALITIES_ERROR,
    isAddingSpecialities: false,
    addedSpecialitiesError
  };
}


export function addSpecialitiesAction(data) {
  return dispatch => {
    dispatch(addSpecialititesRequest());
    return addSpecialities(data)
      .then(response => {
        if (response.status === 200) {
          console.log('res',response);
          dispatch(addSpecialititesCompleted(response.data));
        } else {
          return Promise.reject(response);
        }
        return Promise.resolve();
      })
      .catch(err => {
        if (err.status === 400) {
          console.log('error', err);
          dispatch(addSpecialititesError(err));
        } else {
          console.log('out',err);
        }
      });
  };
}




//DELETE
function deleteSpecialitiesRequest() {
  return {
    type: DELETE_SPECIALITIES_REQUEST,
    isDeletingSpecialities: true
  };
}

function deleteSpecialitiesCompleted(deletedSpecialities) {
  return {
    type: DELETE_SPECIALITIES_COMPLETED,
    isDeletingSpecialities: false,
    deletedSpecialities
  };
}

function deleteSpecialitiesError(deletingSpecialitiesError) {
  return {
    type: DELETE_SPECIALITIES_ERROR,
    isDeletingSpecialities: false,
    deletingSpecialitiesError
  };
}

export function deleteSpecialitiesAction(idList) {
  return async dispatch => {
      dispatch(deleteSpecialitiesRequest());

      const response = await Promise.all(
        idList.map(id => deleteSpecialities(id))
      );
        console.log(response)
      if (response.every(({ data }) => data.success === true)) {
        dispatch(deleteSpecialitiesCompleted(response));
        dispatch(getSpecialities());
      } else {
        dispatch(deleteSpecialitiesError(response));
      }
      return response;
  };
}
