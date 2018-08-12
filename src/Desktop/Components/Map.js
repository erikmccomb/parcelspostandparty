import React from "react"
import { compose, withProps } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"

const Map = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyCsZMf5VXOxrO5XJy4SiHUP5KqBtKiULiI" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyCsZMf5VXOxrO5XJy4SiHUP5KqBtKiULiI",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px`, width: '590px', maxWidth: `100vw`,padding: '7px', backgroundColor:'rgba(0,0,0,0.6)',}} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={17} defaultCenter={{ lat: 29.920202, lng: -90.111310 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 29.920202, lng: -90.111302 }} />
    )}
  </GoogleMap>
));

export default Map
