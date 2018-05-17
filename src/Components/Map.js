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
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBhU9khMmAq1H8l4-bNh2k5OQ0xmr71zVw",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px`, width: '100vw', maxWidth: `590px`,padding: '7px', margin:'5px', backgroundColor:'rgba(0,0,0,0.6)',}} />,
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
