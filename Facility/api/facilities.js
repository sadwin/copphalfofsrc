import { instance } from "./";

export const getFacilitiesList = () => {
  const response = instance({
    method: "get",
    url: "/work/api/building"
  });
  return response;
};

export const getFacilityCard = id => {
  const response = instance({
    method: "get",
    url: `/work/api/building/${id}/card`
  });
  return response;
};

export const getFacilityFullInfo = id => {
  const response = instance({
    method: "get",
    url: `/work/api/building/${id}`
  });
  return response;
};

export const createFacility = data => {
  const response = instance({
    method: "post",
    url: `/work/api/building/`,
    data
  });
  return response;
};

export const updateFacility = (id, main) => {
  const response = instance({
    method: "post",
    url: `/work/api/building/${id}`,
    data: {
      main,
    }
  });
  return response;
};

export const deleteFacility = id => {
  const response = instance({
    method: "delete",
    url: `/work/api/building/${id}`
  });
  return response;
};

export const getOrganizationsList = () => {
  const response = instance({
    method: "get",
    url: "/work/api/organization?mode=select"
  });
  return response;
};

export const getMunicipalsList = (region) => {
  const response = instance({
    method: "get",
    url: `/work/api/dict/municipal?regionId=${region}`
  });
  return response;
};

export const getFacilityDepartments = id => {
  const response = instance({
    method: "get",
    url: `/work/api/building/${id}/main/department`
  });
  return response;
};

export const addFacilityDepartment = (id, depId) => {
  const response = instance({
    method: "post",
    url: `/work/api/building/${id}/main/department`,
    data: {
      departmentId: depId,
    }
  });
  return response;
};

export const deleteFacilityDepartment = (id, depId) => {
  const response = instance({
    method: "delete",
    url: `/work/api/building/${id}/main/department/${depId}`,
  });
  return response;
};

export const addFacilityImage = (id, image) => {
  const data = new FormData();
  data.set('photo', image);

  const response = instance({
    method: "post",
    url: `/work/api/building/${id}/main/photo/`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data,
  });
  return response;
}

export default {
  getFacilitiesList,
  getFacilityCard,
  createFacility,
  deleteFacility,
  getOrganizationsList,
  getMunicipalsList,
  getFacilityFullInfo,
  updateFacility,
  getFacilityDepartments,
  addFacilityDepartment,
  deleteFacilityDepartment,
  addFacilityImage
};
