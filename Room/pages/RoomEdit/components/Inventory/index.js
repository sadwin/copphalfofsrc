import React, { useEffect, useState } from "react";
import InventoryTable from "./InventoryTable";
import useInventory from "./useInventory";

const Inventory = ({ roomId, roomInfo, editMode }) => {
  const { dataSources, getInventory, deleteInventoryItems, createInventoryItem } = useInventory();

  useEffect(() => {
    getInventory(roomId);
  }, []);

  return (
    <div>
      {roomInfo && <InventoryTable
        roomInfo={roomInfo}
        roomId={roomId}
        deleteInventoryItems={deleteInventoryItems}
        inventoryData={dataSources.inventory}
        getRooms={() => getInventory(roomId)}
        createInventoryItem={(data) => createInventoryItem(data, roomInfo, roomId)}
        createdInventoryItem={dataSources.createdInventoryItem}
        editMode={editMode}
      />}
    </div>
  );
};

export default Inventory;
