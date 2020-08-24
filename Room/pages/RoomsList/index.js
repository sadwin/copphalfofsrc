import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../ui/Breadcrumbs";
import { getRoomsList } from "../../api/room";
import useRooms from "./useRooms";
import RoomsTable from "../../components/RoomsTable";

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

const RoomsList = () => {
  const {
    roomsData,
    getRooms,
    deleteRooms,
    createRoom,
  } = useRooms();

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <div>
      <Breadcrumbs items={items} />
      <RoomsTable
        roomsData={roomsData}
        getRooms={getRooms}
        deleteRooms={deleteRooms}
        createRoom={createRoom}
      />
    </div>
  );
};

export default RoomsList;
