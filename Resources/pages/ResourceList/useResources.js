import React from "react";
import api from "../../api/resources";

const initialData = {
  resources: [],
  createdResource: null,
  deletedResource: null,
  isCreatingResource: false
};

export default function useResources() {
  const [data, setRoomsData_] = React.useState(initialData);

  const setRoomsData = newData => {
    const newRoomsData = {
      ...data,
      ...newData
    };

    setRoomsData_(newRoomsData);
  };

  function getResources() {
    api
      .getResourcesList()
      .then(({ data }) => setRoomsData({ resources: data }));
  }

  function deleteResources(idList) {
    Promise.all(idList.map(api.deleteResource)).then(response => {
      setRoomsData({ deletedResource: response });
      getResources();
    });
  }

  function createResource(data) {
    setRoomsData({ isCreatingResource: true });
    api
      .createResource(data)
      .then(({ data }) => {
        setRoomsData({ createdResource: data, isCreatingRoom: false });
        getResources();
      })
      .catch(() => {
        setRoomsData({ isCreatingResource: false });
      });
  }

  return { data, getResources, deleteResources, createResource };
}
