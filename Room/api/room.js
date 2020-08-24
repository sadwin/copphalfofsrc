import { instance } from ".";

export const getRoomsList = () => {
  const response = instance({
    method: "get",
    url: "/work/api/room"
  });
  return response;
};

export const getRoomCard = id => {
  const response = instance({
    method: "get",
    url: `/work/api/room/${id}/card`
  });
  return response;
};

export const getRoomFullInfo = id => {
  const response = instance({
    method: "get",
    url: `/work/api/room/${id}`
  });
  return response;
};

export const getRoomTypes = () => {
  const response = instance({
    method: "get",
    url: "/work/api/dict/room-type"
  });
  return response;
};

export const getRoomSpecialities = id => {
  const response = instance({
    method: "get",
    url: `/work/api/room/${id}/main/speciality`
  });
  return response;
};

export const getRoomWorldSkills = id => {
  const response = instance({
    method: "get",
    url: `/work/api/room/${id}/main/world-skill`
  });
  return response;
};

export const getSpecialities = () => {
  const response = instance({
    method: "get",
    url: `/work/api/dict/speciality`
  });
  return response;
};

export const getWorldSkills = () => {
  const response = instance({
    method: "get",
    url: `/work/api/dict/world-skill`
  });
  return response;
};

export const getRoomPhotos = (id) => {
  const response = instance({
    method: "get",
    url: `/work/api/room/${id}/main/photo`
  });
  return response;
};

export const getResourceTypes = () => {
  const response = instance({
    method: "get",
    url: `/work/api/dict/resource-type`
  });
  return response;
};

export const getInventory = id => {
  const response = instance({
    method: "get",
    url: `/work/api/room/${id}/resource`
  });
  return response;
};

export const getUnitTypes = () => {
  const response = instance({
    method: "get",
    url: `/work/api/dict/unit`
  });
  return response;
};

export const getInventoryItem = (id) => {
  const response = instance({
    method: "get",
    url: `/work/api/resource/${id}`,
  });
  return response;
};

export const createInventoryItem = (data) => {
  const response = instance({
    method: "post",
    url: `/work/api/resource/`,
    data
  });
  return response;
};

export const deleteInventoryItem = id => {
  const response = instance({
    method: "delete",
    url: `/work/api/resource/${id}`
  });
  return response;
};

export const createRoom = data => {
  const response = instance({
    method: "post",
    url: `/work/api/room/`,
    data
  });
  return response;
};

export const updateRoom = (id, info) => {
  const { specialities, worldSkills, ...main } = info.data;
  const response = instance({
    method: "put",
    url: `/work/api/room/${id}`,
    data: {
      main,
      specialities: specialities.map(i => i.id),
      worldSkills: worldSkills.map(i => i.id)
    }
  });
  return response;
};

export const addRoomPhoto = (id, images) => {
  const data = new FormData();
  data.set('photo', images);

  const response = instance({
    method: "post",
    url: `/work/api/room/${id}/main/photo/`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data,
  });
  return response;
}

export const deleteRoom = id => {
  const response = instance({
    method: "delete",
    url: `/work/api/room/${id}`
  });
  return response;
};

export default {
  getRoomsList,
  getRoomCard,
  getRoomTypes,
  getSpecialities,
  getRoomPhotos,
  getWorldSkills,
  getInventory,
  getUnitTypes,
  getInventoryItem,
  deleteInventoryItem,
  createInventoryItem,
  getRoomSpecialities,
  getRoomWorldSkills,
  getRoomFullInfo,
  getResourceTypes,
  createRoom,
  updateRoom,
  deleteRoom,
  addRoomPhoto
};
