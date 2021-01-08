//AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
import React from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./GoogleMap.scss";

const Marker = ({ index, text }) => (
  <div className="marker" key={index}>
    <LocationOnIcon className="icon" />
    {text}
  </div>
);

const mapStyles = {
  width: "100%",
  height: "100%",
};

let address = {};

function GoogleMap(props) {
  address = props.address;
  return (
    <div className="gmap" style={mapStyles}>
      <GoogleMapReact
        className="map"
        bootstrapURLKeys={{ key: "AIzaSyBg6dYSCm_90P5Rru28cHfJ9rVJFtIJkik" }}
        defaultCenter={{
          lat: 12.925852562348817,
          lng: 80.1160449810846,
        }}
        defaultZoom={12}
        options={{
          zoomControl: false,
          fullscreenControl: false
        }}
      >
        {address.map((value) => {
          return (
            <Marker
              index={value.id}
              lat={value.lat}
              lng={value.lng}
              text="Vishnu Cars"
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
