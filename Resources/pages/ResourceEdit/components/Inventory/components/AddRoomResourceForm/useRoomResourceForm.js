import { useReducer } from "react";
import api from "../../../../../../api/room";

const intialState = {
  resourceTypes: [],
  unitTypes: []
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
    default:
      return {
        ...state
      };
  }
}

export default function useRoomResourceForm() {
  const [dataSources, dispatch] = useReducer(reducer, intialState);

  function getResourceTypes() {
    api.getResourceTypes().then(({ data }) => {
      dispatch({ type: "RESOURCE_TYPES", resourceTypes: data });
    });
  }

  function getUnitTypes() {
    api.getUnitTypes().then(({ data }) => {
      dispatch({ type: "UNIT_TYPES", unitTypes: data });
    });
  }

  return {
    dataSources,
    getResourceTypes,
    getUnitTypes
  };
}
