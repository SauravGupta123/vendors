import { useState } from "react"
import Map, { Marker } from "react-map-gl"
import vite from "../../public/vite.svg"
import { Room } from "@mui/icons-material"

const MapComponent = () => {

  const [viewport, setViewport] = useState({
    latitude: 28.6448,
    longitude: 77.216,
    zoom: 8,
  })
  const [newplace, setNewplace] = useState({ lat: null, long: null })
    function handleClick(e) {
      const long = e.lngLat.lng;
      const lat = e.lngLat.lat;
      console.log(long, lat);
      setNewplace({ lat, long })
    }

  console.log(newplace);
  return (
    <div className="w-screen h-fit ">
      <Map
        initialViewState={viewport}
        mapboxAccessToken='pk.eyJ1IjoiYW51cjRhZyIsImEiOiJjbHRnNGdqd3Ewc3F3Mmtxd3J0ejJyMzZzIn0.AwqyqzaaRzf1hsqwgbTjBQ'
        style={{
          width: "100%",
          height: "100%"
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={(viewport) => setViewport(viewport)}
        onDblClick={handleClick}
      >
        {/* {newplace && newplace.lat && newplace.long ? (
          <Marker
            latitude={newplace.lat}
            longitude={newplace.long}
            draggable
            offsetLeft={1.5 * viewport.zoom}
            offsetTop={7 * viewport.zoom}
            onDragEnd={(e) =>
              setNewplace({ lng: e.lngLat.lng, lat: e.lngLat.lat })
            }
          >
            <Room
              style={
                {
                  fontSize: 7 * viewport.zoom,
                  color: "red",
                  cursor: "pointer"
                }
              }
            />
          </Marker>
        ) : null} */}
      </Map>
    </div>
  )
}

export default MapComponent