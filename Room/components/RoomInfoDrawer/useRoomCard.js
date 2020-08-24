import React from "react";
import api from "../../api/room";

export default function useRoomCard() {
  const [roomCard, setRoomCard] = React.useState(null);

  function getRoomCard(id) {
    api.getRoomCard(id).then(({ data }) => setRoomCard(data));
  }

  return { getRoomCard, roomCard };
}
