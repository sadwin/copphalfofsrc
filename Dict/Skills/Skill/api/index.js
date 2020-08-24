import axios from 'axios';
const instance = axios.create({
  timeout: 10000,
  headers: {'Accept': 'application/json'},
})


export const sendToExpertize = (data) => {
  const response = instance({
    method: "post",
    url: "/work/api/skill/rpc",
    data
  });
  return response;
};

export const publish = (data) => {
  const response = instance({
    method: "post",
    url: "/work/api/skill/rpc",
    data
  });
  return response;
};



export const getSkillAll = async() => {
  const response = instance({
    method: "get",
    url: "/work/api/skill?mode=all",
  });
  return response;
};


export const getSkillAuthors = async(id) => {
  const response = instance({
    method: "get",
    url: `/work/api/skill/${id}/author`,
  });
  return response;
};




export const getSkillCard = (id) => {
  const response = instance({
    method: "get",
    url: `/work/api/skill/${id}/card`,
  });
  return response;
};

export const getSkill = (id) => {
  const response = instance({
    method: "get",
    url: `/work/api/skill/${id}`,
  });
  return response;
};


export const updateSkill = (id, data) => {
  const response = instance({
    method: "put",
    url: `/work/api/skill/${id}`,
    data
  });
  return response;
};


// export const addSpecialities = data => {
//   const response = instance({
//     method: "post",
//     url: `/work/api/dict/speciality`,
//     data
//   });
//   return response;
// };


export const deleteSkill = id => {
  const response = instance({
    method: "delete",
    url: `/work/api/skill/${id}`,
  });
  return response;
};


// export const getSpecialityGroup= () => {
//   const response = instance({
//     method: "get",
//     url: "/work/api/dict/speciality-group"
//   });
//   return response;
// };


export const getModuleList= (id) => {
  const response = instance({
    method: "get",
    url: `/work/api/skill/${id}/module`
  });
  return response;
};


export const createModuleList= (id) => {
  const response = instance({
    method: "post",
    url: `/work/api/skill/${id}/module`
  });
  return response;
};

export const updateModule = (id, moduleId, data) => {
  const response = instance({
    method: "put",
    url: `/work/api/skill/${id}/module/${moduleId}`,
    data
  });
  return response;
};


export const deleteModule = (id, moduleId) => {
  const response = instance({
    method: "delete",
    url: `/work/api/skill/${id}/module/${moduleId}`,
  });
  return response;
};


export const createScale = (id, moduleId) => {
  const response = instance({
    method: "post",
    url: `/work/api/skill/${id}/module/${moduleId}/scale`,
  });
  return response;
};
export const updateScale = (id, moduleId, moduleScaleId, data) => {
  const response = instance({
    method: "put",
    url: `/work/api/skill/${id}/module/${moduleId}/scale/${moduleScaleId}`,
    data
  });
  return response;
};
export const deleteScale = (id, moduleId, moduleScaleId) => {
  const response = instance({
    method: "delete",
    url: `/work/api/skill/${id}/module/${moduleId}/scale/${moduleScaleId}`,
  });
  return response;
};



export const createRate = (id, moduleId) => {
  const response = instance({
    method: "post",
    url: `/work/api/skill/${id}/module/${moduleId}/rate`,
  });
  return response;
};
export const updateRate = (id, moduleId, moduleRateId, data) => {
  const response = instance({
    method: "put",
    url: `/work/api/skill/${id}/module/${moduleId}/rate/${moduleRateId}`,
    data
  });
  return response;
};
export const deleteRate = (id, moduleId, moduleRateId) => {
  const response = instance({
    method: "delete",
    url: `/work/api/skill/${id}/module/${moduleId}/rate/${moduleRateId}`,
  });
  return response;
};



export const getRoomList = (id) => {
  const response = instance({
    method: "get",
    url: `/work/api/skill/${id}/room`
  });
  return response;
};
export const createRoom = (id) => {
  const response = instance({
    method: "post",
    url: `/work/api/skill/${id}/room`
  });
  return response;
};
export const updateRoom = (id, roomId, data) => {
  const response = instance({
    method: "put",
    url: `/work/api/skill/${id}/room/${roomId}`,
    data
  });
  return response;
};
export const deleteRoom = (id, roomId) => {
  const response = instance({
    method: "delete",
    url: `/work/api/skill/${id}/room/${roomId}`,
  });
  return response;
};



export const createResource = (id, roomId) => {
  const response = instance({
    method: "post",
    url: `/work/api/skill/${id}/room/${roomId}/resource`
  });
  return response;
};
export const updateResource = (id, roomId, roomResourceId, data) => {
  const response = instance({
    method: "put",
    url: `/work/api/skill/${id}/room/${roomId}/resource/${roomResourceId}`,
    data
  });
  return response;
};
export const deleteResource = (id, roomId, roomResourceId) => {
  const response = instance({
    method: "delete",
    url: `/work/api/skill/${id}/room/${roomId}/resource/${roomResourceId}`,
  });
  return response;
};
