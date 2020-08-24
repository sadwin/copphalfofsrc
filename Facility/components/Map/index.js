import React, { useState } from "react";
import { Map, SearchControl, Placemark } from "react-yandex-maps";

const MapComponent = ({ center, onClick, readOnly = false, ...rest }) => {
  const [coords, setCoords] = useState(center);

  const onMapClick = event => {
    const crds = event.get("coords");
    setCoords(crds);
    onClick(crds);
  };

  return (
    <div>
      <Map onClick={!readOnly && onMapClick} defaultState={{ center: coords, zoom: 9 }} {...rest}>
        <SearchControl options={{ float: "right" }} />
        <Placemark key={coords.join(",")} defaultGeometry={coords} />
      </Map>
    </div>
  );
};

export default MapComponent;
