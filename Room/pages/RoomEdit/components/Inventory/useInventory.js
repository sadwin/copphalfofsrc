import { useReducer } from "react";
import api from "../../../../api/room";

const intialState = {
  inventory: [],
  createdInventoryItem: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "INVENTORY":
      return {
        ...state,
        inventory: action.inventory
      };
    case "INVENTORY_CREATE":
      return {
        ...state,
        createdInventoryItem: action.createdInventoryItem
      };
    default:
      return {
        ...state
      };
  }
}

export default function useInventory() {
  const [dataSources, dispatch] = useReducer(reducer, intialState);

  function getInventory(id) {
    api.getInventory(id).then(({ data }) => {
      dispatch({ type: "INVENTORY", inventory: data });
    });
  }

  function createInventoryItem(data, roomInfo, id) {
    api
      .createInventoryItem({
        ...data,
        organization: roomInfo.info.orgId,
        room: roomInfo.info.id
      })
      .then(({ data }) => {
        dispatch({ type: "INVENTORY_CREATE", createdInventoryItem: data });
        getInventory(id);
      });
  }

  function deleteInventoryItems(idList, id) {
    Promise.all(idList.map(api.deleteInventoryItem)).then(() => {
      getInventory(id);
    });
  }

  return {
    dataSources,
    getInventory,
    deleteInventoryItems,
    createInventoryItem
  };
}
