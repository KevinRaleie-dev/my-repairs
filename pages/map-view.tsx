import React, { useEffect } from 'react'
import ReactMap from 'react-map-gl'
import { Layout } from '../components/Layout'

const Map = () => {
  const [viewport, setViewport] = React.useState({})

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        console.log('success')
        
        setViewport({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          zoom: 13,
        })
      })
    }

  }, [])

  return (
    <div>
        <Layout
        rightElement={() => null}
        > 
            {/* <div>{viewport.latitude} {viewport.longitude}</div> */}
            {/* <Mapbox /> */}
            <ReactMap
            initialViewState={viewport}            
            style={{
              width: '100%',
              height: '100%'
            }}
            mapStyle='mapbox://styles/kevinraleie/cl5rapo9z003015lndvpl4zpz'
            mapboxAccessToken='pk.eyJ1Ijoia2V2aW5yYWxlaWUiLCJhIjoiY2wzc3RvcDNwMDNhMTNjcGNhNmV4dGhuciJ9.29OWrmrGB20l-JbfUhaO0g'
            />
        </Layout>
    </div>
  )
}

export default Map
