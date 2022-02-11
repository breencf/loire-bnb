
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = { lat: 47.475055, lng: -0.556845 };

export const Maps = ({ apiKey, wineries, hoveredWinery }) => {
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: apiKey,
  // });
  const [selectedWinery, setSelectedWinery] = useState(null);

  useEffect(() => setSelectedWinery(hoveredWinery), [hoveredWinery]);

  return (
    // isLoaded &&
     (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {wineries.map((winery) => {
          return (
            <Marker
              key={winery.id}
              position={{
                lat: +winery.lat,
                lng: +winery.long,
              }}
              onClick={() => {
                setSelectedWinery(winery);
              }}
            />
          );
        })}

        {selectedWinery && (
          <InfoWindow
            position={{
              lat: +selectedWinery.lat,
              lng: +selectedWinery.long,
            }}
            onCloseClick={() => {
              setSelectedWinery(null);
            }}
          >
            <div>
              <h4>{selectedWinery.name}</h4>
              {selectedWinery.town}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    )
  );
};
