import React from "react";
import api from "../../api/room";

const initialData = {
  roomInfo: null,
  photos: null,
  deletedRoom: null,
  isUpdatingRoom: false,
  updatedRoom: null,
  isEdited: true
};

export default function useRoomEdit() {
  const [roomData, setRoomsData_] = React.useState(initialData);

  const setRoomsData = newData => {
    const newRoomsData = {
      ...roomData,
      ...newData
    };

    setRoomsData_(newRoomsData);
  };

  function updateRoom(id, data) {
    setRoomsData({ isUpdatingRoom: true });
    api.updateRoom(id, data).then(({ data }) => {
      setRoomsData({ updatedRoom: data, isUpdatingRoom: false });
    });
  }

  function addRoomPhoto(id, images) {
    Promise.all(images.map(image => api.addRoomPhoto(id, image))).then(() => {
      getRoom(id);
    });
  }

  function deleteRoom(id) {
    api.deleteRoom(id).then(({ data }) => {
      setRoomsData({ deletedRoom: data });
    });
  }

  function getRoom(id) {
    Promise.all([
      api.getRoomFullInfo(id),
      api.getRoomSpecialities(id),
      api.getRoomWorldSkills(id),
      api.getRoomPhotos(id)
    ]).then(([roomInfo, specialities, worldSkills, photos]) => {
      setRoomsData({
        roomInfo: {
          data: {
            ...roomInfo.data.data,
            specialities: specialities.data,
            worldSkills: worldSkills.data
          },
          info: roomInfo.data.info
        },
        photos: photos.data
      });
    });
  }

  return { roomData, setRoomsData, getRoom, updateRoom, deleteRoom, addRoomPhoto };
}
