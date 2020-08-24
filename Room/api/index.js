import axios from 'axios';
import notify from 'devextreme/ui/notify';

export const instance = axios.create({
  timeout: 10000,
})

instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    const message = error.response.data.errors
      .map(({ message }) => message)
      .join(", ");
    notify(
      {
        closeOnClick: true,
        closeOnOutsideClick: true,
        message
      },
      "error"
    );
    return Promise.reject(error);
  }
);
