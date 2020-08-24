import { useReducer } from "react";
import {
  getFacilitiesList,
  getFacilityDepartments
} from "../../Facility/api/facilities";
import api from "../api/room.js";

const intialState = {
  facilities: [],
  roomTypes: [],
  departments: [],
  specialities: [],
  worldSkills: []
};

function reducer(state, action) {
  switch (action.type) {
    case "ROOM_FORM":
      return {
        ...state,
        facilities: action.facilities,
        roomTypes: action.roomTypes,
        specialities: action.specialities,
        worldSkills: action.worldSkills
      };
    case "ROOM_TYPES":
      return {
        ...state,
        roomTypes: action.roomTypes
      };
    case "ROOM_FACILITIES":
      return {
        ...state,
        facilities: action.facilities
      };
    case "ROOM_DEPARTMENTS":
      return {
        ...state,
        departments: action.departments
      };
    default:
      return {
        ...state,
        ...action.payload
      };
  }
}

export default function useRoomForm() {
  const [dataSources, dispatch] = useReducer(reducer, intialState);

  function getRoomFacilities() {
    getFacilitiesList().then(({ data }) => {
      dispatch({ type: "ROOM_FACILITIES", facilities: data });
    });
  }

  function getRoomTypes() {
    api.getRoomTypes().then(({ data }) => {
      dispatch({ type: "ROOM_TYPES", roomTypes: data });
    });
  }

  function getRoomDeparments(id) {
    getFacilityDepartments(id).then(({ data }) => {
      dispatch({ type: "ROOM_DEPARTMENTS", departments: data });
    });
  }

  function getRoomForm() {
    Promise.all([
      getFacilitiesList(),
      api.getRoomTypes(),
      api.getSpecialities(),
      api.getWorldSkills()
    ]).then(([facilities, roomTypes, specialities, worldSkills]) => {
      dispatch({
        type: "ROOM_FORM",
        facilities: facilities.data,
        roomTypes: roomTypes.data,
        specialities: specialities.data,
        worldSkills: worldSkills.data
      });
    });
  }

  return {
    dataSources,
    getRoomFacilities,
    getRoomTypes,
    getRoomDeparments,
    getRoomForm
  };
}
