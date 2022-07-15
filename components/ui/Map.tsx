import React from 'react'

import mapbox from 'mapbox-gl';
import { Box, Text } from '@chakra-ui/react';

mapbox.accessToken = 'pk.eyJ1Ijoia2V2aW5yYWxlaWUiLCJhIjoiY2wzc3RvcDNwMDNhMTNjcGNhNmV4dGhuciJ9.29OWrmrGB20l-JbfUhaO0g'

export const Map = () => {
    
  const mapContainer = React.useRef(null);
  const map = React.useRef<any>();
  const [lng, setLng] = React.useState(26.0038);
  const [lat, setLat] = React.useState(-28.2793);
  const [zoom, setZoom] = React.useState(9);

  React.useEffect(() => {
    if (map.current) return;

    map.current = new mapbox.Map({
       container: mapContainer.current as any,
       style: 'mapbox://styles/mapbox/streets-v11',
       center: [lng, lat],
       zoom: zoom
    })


  }, [lat, lng, zoom])


  return (
    <Box
    ref={mapContainer}
    width="100%"
    height="100%"
    >
    </Box>
  )
}
