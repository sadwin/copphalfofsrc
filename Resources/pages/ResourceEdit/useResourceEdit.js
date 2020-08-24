import React from "react";
import api from "../../api/resources";
import { getResourceTypes } from "../../../Room/api/room";

const initialData = {
  deleteModalOpen: false,
  resourceInfo: null,
  deletedResource: null,
  isUpdatingResource: false,
  updatedResource: null,
  isEdited: true,
};

export default function useResourceEdit() {
  const [resourceData, setResourcesData_] = React.useState(initialData);

  const setResourcesData = newData => {
    const newResourcesData = {
      ...resourceData,
      ...newData
    };

    setResourcesData_(newResourcesData);
  };

  function updateResource(id, data) {
    setResourcesData({ isUpdatingResource: true });

    const formattedData = {
      ...data,
      specialities: data.specialities.map(({ id }) => id),
      worldSkills: data.worldSkills.map(({ id }) => id),
    }

    api.updateResource(id, formattedData).then(({ data }) => {
      setResourcesData({ updatedResource: data, isUpdatingResource: false });
    });
  }

  function deleteResource(id) {
    api.deleteResource(id).then(({ data }) => {
      setResourcesData({ deletedResource: data });
    });
  }

  function getResource(id) {
    Promise.all([
      api.getResourceFullInfo(id),
      api.getResourceSpecialities(id),
      api.getResourceWorldSkills(id)
    ]).then(([resourceInfo, specialities, worldSkills]) => {
      setResourcesData({
        resourceInfo: {
          data: { ...resourceInfo.data.data, specialities: specialities.data, worldSkills: worldSkills.data },
          info: resourceInfo.data.info,
        }
      });
    });
  }

  return { resourceData, setResourcesData, updateResource, deleteResource, getResource };
}
