import React from "react";
import api from "../../api/room";

const initialData = {
  roomsList: [],
  deletedRoom: null,
  isCreatingRoom: false,
  createdRoom: null,
  updatedRoom: null
};

export default function useRooms() {
  const [roomsData, setRoomsData_] = React.useState(initialData);

  const setRoomsData = newData => {
    const newRoomsData = {
      ...roomsData,
      ...newData
    };

    setRoomsData_(newRoomsData);
  };

  function getRooms() {
    api.getRoomsList().then(({ data }) => setRoomsData({ roomsList: data }));
  }

  function deleteRooms(idList) {
    Promise.all(idList.map(api.deleteRoom)).then(response => {
      setRoomsData({ deletedRoom: response });
      getRooms();
    });
  }

  function createRoom(data) {
    setRoomsData({ isCreatingRoom: true });
    api.createRoom(data).then(({ data }) => {
      setRoomsData({ createdRoom: data, isCreatingRoom: false });
      getRooms();
    });
  }

  return { roomsData, getRooms, deleteRooms, createRoom };
}
