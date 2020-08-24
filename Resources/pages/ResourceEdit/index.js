import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Breadcrumbs from "../../../ui/Breadcrumbs";
import DeleteConfirmationModal from "../../../Facility/components/DeleteConfirmationModal";
import { makeStyles } from "@material-ui/core/styles";
import Progress from "../../../ui/Progress";
import TopBar from "./components/TopBar";
import Box from "../../../ui/Box";
import ResourceDrawer from "../../components/ResourceDrawer";
import useResourceEdit from "./useResourceEdit";
import ResourceForm from "./components/ResourceForm";

const useStyles = makeStyles(() => ({
  facilityRoot: {
    display: "flex",
    background: "#F6FBFF"
  },
  pageRoot: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1
  },
  topBar: {
    marginBottom: 10
  },
  mainContent: {
    padding: 8,
    maxWidth: 816
  },
  form: {
    width: 385
  },
  twoColumns: {
    display: "flex"
  },
  maps: {
    marginLeft: 55
  },
  caption: {
    color: "#778899",
    fontSize: 10,
    marginBottom: 16
  }
}));

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

const ResourceEdit = ({ match, history }) => {
  const { id } = match.params;
  const classes = useStyles();
  const {
    resourceData: {
      deleteModalOpen,
      resourceInfo,
      isUpdatingResource,
      isEdited,
    },
    setResourcesData,
    updateResource,
    deleteResource,
    getResource
  } = useResourceEdit();

  const returnBack = () => history.push("/work/app/resources");

  useEffect(() => {
    getResource(id);
  }, []);

  return (
    <div>
      <DeleteConfirmationModal
        modalText="Удалить ресурс?"
        open={deleteModalOpen}
        onConfirm={() => {
          deleteResource(id);
          returnBack();
        }}
        handleClose={() => setResourcesData({ deleteModalOpen: false })}
      />
      <Breadcrumbs items={items} />
      {resourceInfo ? (
        <div className={classes.facilityRoot}>
          <div className={classes.pageRoot}>
            <div className={classes.topBar}>
              <TopBar
                reloadRoom={() => getResource(id)}
                returnBack={returnBack}
                updateRoom={() => {
                  updateResource(id, resourceInfo.data);
                }}
                isUpdatingRoom={isUpdatingResource}
                openDeleteModal={() =>
                  setResourcesData({ deleteModalOpen: true })
                }
                disabled={!isEdited}
              />
            </div>
            <Box>
              <ResourceForm
                initialData={resourceInfo.data}
                disabled={!resourceInfo.info.editable}
                onFormChange={data =>
                  setResourcesData({ resourceInfo: { ...resourceInfo, data } })
                }
              />
            </Box>
          </div>
          <ResourceDrawer resourceId={id} open hideLink />
        </div>
      ) : (
        <Progress />
      )}
    </div>
  );
};

export default withRouter(ResourceEdit);
