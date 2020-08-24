import axios from 'axios';

export const instance = axios.create({
  timeout: 10000,
});


export const getSpecialityCounter = () => {
    const response = instance({
      method: "get",
      url: "/work/api/dashboard/counter/dict-specialities"
    });
    return response;
  };

  export const getSkillCounter = () => {
    const response = instance({
      method: "get",
      url: "/work/api/dashboard/counter/dict-skills"
    });
    return response;
  };
  