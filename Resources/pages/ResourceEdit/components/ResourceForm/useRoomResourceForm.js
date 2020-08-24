import { useReducer } from "react";
import {
  getResourceTypes,
  getUnitTypes,
  getSpecialities,
  getWorldSkills
} from "../../../../../Room/api/room";
import api, { getOrganizationsList } from "../../../../api/resources";

const intialState = {
  resourceTypes: [],
  unitTypes: [],
  organizations: [],
  specialities: [],
  worldSkills: [],
  addresses: [],
  rooms: []
};

function reducer(state, action) {
  switch (action.type) {
    case "RESOURCE_FORM":
      return {
        ...state,
        resourceTypes: action.resourceTypes,
        unitTypes: action.unitTypes,
        organizations: action.organizations,
        specialities: action.specialities,
        worldSkills: action.worldSkills
      };
    case "ADDRESS_LIST":
      return {
        ...state,
        addresses: action.addresses
      };
    case "ROOM_LIST":
      return {
        ...state,
        rooms: action.rooms
      };
    default:
      return {
        ...state
      };
  }
}

export default function useRoomResourceForm() {
  const [dataSources, dispatch] = useReducer(reducer, intialState);

  function getResourceForm() {
    Promise.all([
      getResourceTypes(),
      getUnitTypes(),
      getOrganizationsList(),
      getSpecialities(),
      getWorldSkills()
    ]).then(
      ([
        resourceTypes,
        unitTypes,
        organizations,
        specialities,
        worldSkills
      ]) => {
        dispatch({
          type: "RESOURCE_FORM",
          resourceTypes: resourceTypes.data,
          unitTypes: unitTypes.data,
          organizations: organizations.data,
          specialities: specialities.data,
          worldSkills: worldSkills.data
        });
      }
    );
  }

  function getOrganizationAddressList(id) {
    api.getOrganizationAddressList(id).then(({ data }) => {
      dispatch({ type: "ADDRESS_LIST", addresses: data });
    });
  }

  function getAddressRoomList(id) {
    api.getAddressRoomList(id).then(({ data }) => {
      dispatch({ type: "ROOM_LIST", rooms: data });
    });
  }

  return {
    dataSources,
    getResourceForm,
    getOrganizationsList,
    getOrganizationAddressList,
    getAddressRoomList
  };
}
