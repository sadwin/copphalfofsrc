import React, { useEffect } from "react";
import Breadcrumbs from "../../../ui/Breadcrumbs";
import useResources from "./useResources";
import ResourceTable from "../../components/ResourceTable";

const items = [
  {
    label: "Управление ООП",
    link: "#"
  },
  {
    label: "Ресурсы",
    link: "#"
  },
  {
    label: "Материально-технические ресурсы",
    link: "#"
  },
  {
    label: "Моё оборудование, инструменты и ПО",
    link: "#"
  }
];

const ResourceList = () => {
    const { data, getResources, deleteResources, createResource } = useResources();

  useEffect(() => {
    getResources();
  }, []);

  return (
    <div>
      <Breadcrumbs items={items} />
      {data.resources && <ResourceTable
        deleteResources={deleteResources}
        data={data}
        getResources={getResources}
        createResource={createResource}
        // editMode={true}
      />}
    </div>
  );
};

export default ResourceList;