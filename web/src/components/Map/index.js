import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Container } from './styles';

// eslint-disable-next-line react/prop-types
const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      />
    </Container>
  </div>
);

export default Map;
