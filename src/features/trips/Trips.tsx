import * as React from "react"
import { Marker, Popup, TileLayer, MapContainer } from "react-leaflet"

import { useMap } from "react-leaflet/hooks"

interface ITripsProps {}

const Trips: React.FunctionComponent<ITripsProps> = props => {
  return (
    <div id="map">
      <MapContainer
        style={{ height: "50vh" }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Trips
