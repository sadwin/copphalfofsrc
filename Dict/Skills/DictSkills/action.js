import {getSpecialityCounter, getSkillCounter} from './api';

export const GET_SPECIALITYCOUNTER_REQUEST = "GET_SPECIALITYCOUNTER_REQUEST";
export const GET_SPECIALITYCOUNTER_COMPLETED = "GET_SPECIALITYCOUNTER_COMPLETED";
export const GET_SPECIALITYCOUNTER_ERROR = "GET_SPECIALITYCOUNTER_ERROR";

export const GET_SKILLCOUNTER_REQUEST = "GET_SKILLCOUNTER_REQUEST";
export const GET_SKILLCOUNTER_COMPLETED = "GET_SKILLCOUNTER_COMPLETED";
export const GET_SKILLCOUNTER_ERROR = "GET_SKILLCOUNTER_ERROR";


function fetchingSpecialityCounter() {
    return {
      type: GET_SPECIALITYCOUNTER_REQUEST,
      isFetchingSpecialityCounter: true
    };
  }
  
  function SpecialityCounterCompleted(specialityCounter) {
    return {
      type: GET_SPECIALITYCOUNTER_COMPLETED,
      isFetchingSpecialityCounter: false,
      specialityCounter
    };
  }
  
  function SpecialityCounterError(specialityCounterError) {
    return {
      type: GET_SPECIALITYCOUNTER_ERROR,
      isFetchingSpecialityCounter: false,
      specialityCounterError
    };
  }
  
  export function getSpecialityCounterAction() {
    return dispatch => {
      dispatch(fetchingSpecialityCounter());
      return getSpecialityCounter()
        .then(response => {
          if (response.status === 200) {
            console.log(response);
            dispatch(SpecialityCounterCompleted(response.data));
          } else {
            return Promise.reject(response);
          }
          return Promise.resolve();
        })
        .catch(err => {
          if (err.status === 404) {
            console.log(err);
            dispatch(SpecialityCounterError(err.status));
          } else {
            console.log(err);
          }
        });
    };
  }




  function fetchingSkillCounter() {
    return {
      type: GET_SKILLCOUNTER_REQUEST,
      isFetchingSkillCounter: true
    };
  }
  
  function SpecialitySkillCompleted(skillCounter) {
    return {
      type: GET_SKILLCOUNTER_COMPLETED,
      isFetchingSkillCounter: false,
      skillCounter
    };
  }
  
  function SpecialitySkillError(skillCounterError) {
    return {
      type: GET_SKILLCOUNTER_ERROR,
      isFetchingSkillCounter: false,
      skillCounterError
    };
  }
  
  export function getSkillCounterAction() {
    return dispatch => {
      dispatch(fetchingSkillCounter());
      return getSkillCounter()
        .then(response => {
          if (response.status === 200) {
            dispatch(SpecialitySkillCompleted(response.data));
          } else {
            return Promise.reject(response);
          }
          return Promise.resolve();
        })
        .catch(err => {
          if (err.status === 404) {
            console.log(err);
            dispatch(SpecialitySkillError(err.status));
          } else {
            console.log(err);
          }
        });
    };
  }