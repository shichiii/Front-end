import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

const ClickableMap = () => {
  const [marker, setMarker] = useState(null);
  const mapRef = useRef();

  const handleMapClick = (e) => {
    const newMarker = {
      position: [e.latlng.lat, e.latlng.lng],
    };

    setMarker(newMarker);
  };

  const handleMarkerClick = () => {
    if (marker) {
      const latitude = marker.position[0].toFixed(6);
      const longitude = marker.position[1].toFixed(6);

      const data ={
        geo_width: latitude,
        geo_length : longitude
      };
      createLocation(data);
    }

    setMarker(null);
  };
  const createLocation = async (data) => {
    try{

    const reponse = await axios.post('http://185.157.245.99:8000/location/create/', data);
    console.log(reponse.data);
    }catch(error){
      console.error(error);
    }
  };

  const Markers = () => {
    return marker ? (
      <Marker
        position={marker.position}
        eventHandlers={{
          click: handleMarkerClick,
        }}
      >
        <Popup>
          Latitude: {marker.position[0].toFixed(6)}<br />
          Longitude: {marker.position[1].toFixed(6)}
        </Popup>
      </Marker>
    ) : null;
  };

  // Component to handle map events
  const EventHandling = () => {
    useMapEvents({
      click: handleMapClick,
    });

    return null;
  };

  return (
    <MapContainer center={[35.6895, 51.3890]} zoom={13} style={{ height: '300px' }} ref={mapRef}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers />
      <EventHandling />
    </MapContainer>
  );
};

export default ClickableMap;
