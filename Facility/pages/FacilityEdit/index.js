import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Breadcrumbs from "./../../../ui/Breadcrumbs";
import { connect } from "react-redux";
import {
  getFullFacility,
  deleteFacilities,
  updateFacility
} from "../../store/actions";
import Box from "../../../ui/Box";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "./components/TopBar";
import Departments from "./components/Departments";
import DepartmentsModal from "./components/DepartmentsModal";
import DeleteConfirmationModal from "../../components/DeleteConfirmationModal";
import { Typography } from "@material-ui/core";
import FacilityInfoForm from "../../components/FacilityInfoForm";
import Progress from "../../../ui/Progress";
import FacilityInfoDrawer from "../../components/FacilityInfoDrawer";
import Photos from "./components/Photos";
import MapComponent from "../../components/Map";

const useStyles = makeStyles(() => ({
  facilityRoot: {
    display: "flex",
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
    color: '#778899',
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
    label: "Мои адреса",
    link: "#"
  }
];

const initialState = {
  deleteModalOpen: false,
  departmentsModalOpen: false,
  editableFacilityInfo: null,
  isEdited: true
};

const FacilityEdit = ({
  getFullFacility,
  requestFacilityDelete,
  isDeletingFacility,
  updateFacility,
  isUpdatingFacility,
  facilityFullInfo,
  match,
  history
}) => {
  const { id } = match.params;
  const classes = useStyles();
  const [state, setStateObject] = React.useState(initialState);

  const setState = (field, value) => {
    setStateObject({
      ...state,
      [field]: value
    });
  };

  const returnBack = () => history.push("/work/app/facilities");

  useEffect(() => {
    getFullFacility(id);
  }, [id]);

  useEffect(() => {
    if (facilityFullInfo) {
      setState("editableFacilityInfo", facilityFullInfo.data);
    }
  }, [facilityFullInfo]);

  return (
    <div>
      <DeleteConfirmationModal
        modalText="Удалить адрес?"
        open={state.deleteModalOpen}
        onConfirm={() => {
          requestFacilityDelete(id);
          returnBack();
        }}
        handleClose={() => setState("deleteModalOpen", false)}
      />
      <Breadcrumbs items={items} />
      {facilityFullInfo ? (
        <div className={classes.facilityRoot}>
          <div className={classes.pageRoot}>
            <div className={classes.topBar}>
              <TopBar
                reloadFacility={() => getFullFacility(id)}
                returnBack={returnBack}
                updateFacility={() => {
                  setState("isEdited", true);
                  updateFacility(id, state.editableFacilityInfo);
                }}
                isUpdatingFacility={isUpdatingFacility}
                openDeleteModal={() => setState("deleteModalOpen", true)}
                disabled={!state.isEdited}
              />
            </div>
            <Box>
              <div className={classes.mainContent}>
                <Typography gutterBottom>Основные сведения</Typography>
                <div className={classes.twoColumns}>
                  <div className={classes.form}>
                    <FacilityInfoForm
                      facilityInfo={facilityFullInfo.data}
                      onFormChange={formState => {
                        setState("editableFacilityInfo", formState);
                      }}
                    />
                    <Departments
                      id={id}
                      openModal={() => setState("departmentsModalOpen", true)}
                    />
                  </div>
                  <div className={classes.maps}>
                    <div className={classes.caption}>
                      Укажите местоположение объекта на карте
                    </div>
                    <MapComponent
                      center={[facilityFullInfo.data.latitude, facilityFullInfo.data.longitude]}
                      width={380}
                      height={240}
                      onClick={coords => {
                        setState("editableFacilityInfo", {
                          ...state.editableFacilityInfo,
                          latitude: coords[0],
                          longitude: coords[1]
                        });
                      }}
                    />
                  </div>
                </div>
                <Photos />
              </div>
            </Box>
          </div>
          <FacilityInfoDrawer facilityId={id} open hideLink />
          <DepartmentsModal
            open={state.departmentsModalOpen}
            handleClose={() => setState("departmentsModalOpen", false)}
          />
        </div>
      ) : (
        <Progress />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  facilityFullInfo: state.facilities.facilityFullInfo,
  isDeletingFacility: state.facilities.isDeletingFacilities,
  isUpdatingFacility: state.facilities.isUpdatingFacility
});

const mapDispatchToProps = dispatch => ({
  getFullFacility: id => dispatch(getFullFacility(id)),
  requestFacilityDelete: id => dispatch(deleteFacilities([id])),
  updateFacility: (id, data) => dispatch(updateFacility(id, data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FacilityEdit));
