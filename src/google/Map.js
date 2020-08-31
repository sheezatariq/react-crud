
import React, { useState, useCallback, useRef } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import {  formatRelative } from 'date-fns';
import "@reach/combobox/styles.css";
import MapStyle from './MapStyle';

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 43.653225,
  lng: -79.383186,
};

const options = {
  styles: MapStyle,
  disableDefaultUI: true,
  zoomControl: true,
};


export default function Map() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
    libraries,
  });

  const [markers, setMarkers ] = useState([]);

  const [selected, setSelected] = useState(null);

  const onMapClick = useCallback((event) => {
    setMarkers((current) => [...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}>
        {markers.map((marker) =>(
          <Marker
            key={marker.time.toISOString()} 
            position={{ lat:marker.lat, lng:marker.lng }}
            onClick={() => {
              setSelected(marker);

            }}
          />
        ))}
        {selected ? (
          <InfoWindow position= {{lat: selected.lat, lng: selected.lng}} 
            onCloseClick={() => {
              setSelected(null);
            }}>
            <div>
              <h2>Location Spotted!</h2>
              <p>Spotted {formatRelative(selected.time,new Date())}</p>
            </div>
          </InfoWindow>
        ): null }
      </GoogleMap>
    </div>
  )
}

  
  