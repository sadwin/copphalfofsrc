import { instance } from ".";

export const getResourcesList = () => {
  const response = instance({
    method: "get",
    url: "/work/api/resource"
  });
  return response;
};

export const getResourceCard = id => {
  const response = instance({
    method: "get",
    url: `/work/api/resource/${id}/card`
  });
  return response;
};

export const getResourceSpecialities = id => {
  const response = instance({
    method: "get",
    url: `/work/api/resource/${id}/main/speciality`
  });
  return response;
};

export const getResourceWorldSkills = id => {
  const response = instance({
    method: "get",
    url: `/work/api/resource/${id}/main/world-skill`
  });
  return response;
};

export const getResourceFullInfo = id => {
  const response = instance({
    method: "get",
    url: `/work/api/resource/${id}`
  });
  return response;
};

export const getOrganizationsList = () => {
  const response = instance({
    method: "get",
    url: "/work/api/organization"
  });
  return response;
};

export const getOrganizationAddressList = id => {
  const response = instance({
    method: "get",
    url: `/work/api/organization/${id}/building`
  });
  return response;
};

export const getAddressRoomList = id => {
  const response = instance({
    method: "get",
    url: `/work/api/building/${id}/room`
  });
  return response;
};

export const createResource = data => {
  const response = instance({
    method: "post",
    url: `/work/api/resource/`,
    data
  });
  return response;
};

export const deleteResource = id => {
  const response = instance({
    method: "delete",
    url: `/work/api/resource/${id}`
  });
  return response;
};

export const updateResource = (id, main) => {
  const data = {
    main: {
      ...main,
    },
    specialities: main.specialities,
    worldSkills: main.worldSkills,
  }
  
  const response = instance({
    method: "put",
    url: `/work/api/resource/${id}`,
    data
  });
  return response;
};

export default {
  getResourcesList,
  getResourceCard,
  getResourceFullInfo,
  getResourceSpecialities,
  getResourceWorldSkills,
  getOrganizationsList,
  getOrganizationAddressList,
  getAddressRoomList,
  createResource,
  deleteResource,
  updateResource
};
