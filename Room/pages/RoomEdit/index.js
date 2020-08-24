import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Breadcrumbs from "../../../ui/Breadcrumbs";
import useRoomEdit from "./useRoomEdit";
import DeleteConfirmationModal from "../../../Facility/components/DeleteConfirmationModal";
import { makeStyles } from "@material-ui/core/styles";
import Progress from "../../../ui/Progress";
import TopBar from "./components/TopBar";
import Box from "../../../ui/Box";
import RoomInfoDrawer from "../../components/RoomInfoDrawer";
import Tabs from "./components/Tabs";
import RoomForm from "./components/RoomForm";
import Inventory from "./components/Inventory";
import Photos from "./components/Photos";

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
  },
  photos: {
    width: 774
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
    label: "Мои помещения и площадки",
    link: "#"
  }
];

const RoomEdit = ({ match, history }) => {
  const { id } = match.params;
  const classes = useStyles();
  const {
    roomData: { roomInfo, photos, deleteModalOpen, isEdited, isUpdatingRoom },
    setRoomsData,
    getRoom,
    updateRoom,
    deleteRoom,
    addRoomPhoto
  } = useRoomEdit();

  const returnBack = () => history.push("/work/app/rooms");

  useEffect(() => {
    getRoom(id);
  }, []);

  return (
    <div>
      <DeleteConfirmationModal
        modalText="Удалить помещение?"
        open={deleteModalOpen}
        onConfirm={() => {
          deleteRoom(id);
          returnBack();
        }}
        handleClose={() => setRoomsData({ deleteModalOpen: false })}
      />
      <Breadcrumbs items={items} />
      {roomInfo ? (
        <div className={classes.facilityRoot}>
          <div className={classes.pageRoot}>
            <div className={classes.topBar}>
              <TopBar
                reloadRoom={() => getRoom(id)}
                returnBack={returnBack}
                updateRoom={() => {
                  updateRoom(id, roomInfo);
                }}
                isUpdatingRoom={isUpdatingRoom}
                openDeleteModal={() => setRoomsData({ deleteModalOpen: true })}
                disabled={!isEdited}
              />
            </div>
            <Tabs>
              <Box noMargin>
                <RoomForm
                  initialData={roomInfo.data}
                  disabled={!roomInfo.info.editable}
                  onFormChange={data =>
                    setRoomsData({ roomInfo: { ...roomInfo, data } })
                  }
                />
                <div classes={classes.photos}>
                  <Photos addImages={(photos) => addRoomPhoto(id, photos)} photos={photos} />
                </div>
              </Box>
              <Inventory
                roomId={id}
                roomInfo={roomInfo}
                editMode={roomInfo.info.editable}
              />
              <Box></Box>
            </Tabs>
          </div>
          <RoomInfoDrawer roomId={id} open hideLink />
        </div>
      ) : (
        <Progress />
      )}
    </div>
  );
};

export default withRouter(RoomEdit);
