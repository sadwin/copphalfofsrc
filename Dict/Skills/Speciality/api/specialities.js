import { instance } from ".";

export const getSpecialitiesList = () => {
  const response = instance({
    method: "get",
    url: "/work/api/dict/speciality"
  });
  return response;
};

export const addSpecialities = data => {
  const response = instance({
    method: "post",
    url: `/work/api/dict/speciality`,
    data
  });
  return response;
};


export const deleteSpecialities = id => {
  const response = instance({
    method: "delete",
    url: `/work/api/dict/speciality/${id}`,
  });
  return response;
};


export const getSpecialityGroup= () => {
  const response = instance({
    method: "get",
    url: "/work/api/dict/speciality-group"
  });
  return response;
};


