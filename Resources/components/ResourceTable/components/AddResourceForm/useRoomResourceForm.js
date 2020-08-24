import { useReducer } from "react";
import { getResourceTypes, getUnitTypes } from "../../../../../Room/api/room";
import api from '../../../../api/resources';

const intialState = {
  resourceTypes: [],
  unitTypes: [],
  organizations: [],
  addresses: [],
  rooms: []
};

function reducer(state, action) {
  switch (action.type) {
    case "RESOURCE_TYPES":
      return {
        ...state,
        resourceTypes: action.resourceTypes
      };
    case "UNIT_TYPES":
      return {
        ...state,
        unitTypes: action.unitTypes
      };
    case "ORGANIZATIONS_LIST":
      return {
        ...state,
        organizations: action.organizations
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

  function getResourceTypesList() {
    getResourceTypes().then(({ data }) => {
      dispatch({ type: "RESOURCE_TYPES", resourceTypes: data });
    });
  }

  function getUnitTypesList() {
    getUnitTypes().then(({ data }) => {
      dispatch({ type: "UNIT_TYPES", unitTypes: data });
    });
  }

  function getOrganizationsList() {
    api.getOrganizationsList().then(({ data }) => {
      dispatch({ type: "ORGANIZATIONS_LIST", organizations: data });
    });
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
    getResourceTypesList,
    getUnitTypesList,
    getOrganizationsList,
    getOrganizationAddressList,
    getAddressRoomList
  };
}
