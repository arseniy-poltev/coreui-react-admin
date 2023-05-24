import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CNavLink,
  CBadge
} from '@coreui/react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps'


// To use the Google Maps JavaScript API, you must register your app project on the Google API Console and get a Google API key which you can add to your app
const apiKey = 'AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA'

const defaultZoom = 11
const defaultCenter = { lat: 37.431489, lng: -122.163719 }
const locations = [
  {
    lat: 37.431489,
    lng: -122.163719,
    label: 'S',
    draggable: false,
    title: 'Stanford',
    www: 'https://www.stanford.edu/'
  },
  {
    lat: 37.394694,
    lng: -122.150333,
    label: 'T',
    draggable: false,
    title: 'Tesla',
    www: 'https://www.tesla.com/'
  },
  {
    lat: 37.331681,
    lng: -122.030100,
    label: 'A',
    draggable: false,
    title: 'Apple',
    www: 'https://www.apple.com/'
  },
  {
    lat: 37.484722,
    lng: -122.148333,
    label: 'F',
    draggable: false,
    title: 'Facebook',
    www: 'https://www.facebook.com/'
  }
]

const MarkerList = () => {
  return locations.map((location, index) => {
    return (
      <MarkerWithInfoWindow key={index.toString()} location={location}/>
    )
  })
}

const MarkerWithInfoWindow = ({location}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Marker 
      onClick={() => setIsOpen(!isOpen)} 
      position={location} 
      title={location.title} 
      label={location.label}
    >
      { isOpen &&
        <InfoWindow onCloseClick={() => setIsOpen(false)}>
          <CNavLink href={location.www} target="_blank">{location.title}</CNavLink>
        </InfoWindow>
      }
    </Marker>
  )
}

const GoogleMapsComponent = withScriptjs(withGoogleMap(() => {
    return (
      <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
        {<MarkerList locations={locations}/>}
      </GoogleMap>
    )
  }
))

const ReactGoogleMaps = () => {
  return (
    <CCard>
      <CCardHeader>
        React Google Maps{' '}
        <CBadge href="https://coreui.io/pro/react/" color="danger" target="_blank">CoreUI Pro Component</CBadge>
        <div className="card-header-actions">
          <a href="https://github.com/tomchentw/react-google-maps" rel="noreferrer noopener" target="_blank" className="card-header-action">
            <small className="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody>
        <GoogleMapsComponent
          key="map"
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
          loadingElement={<div style={{height: `100%`}}/>}
          containerElement={<div style={{height: `400px`}}/>}
          mapElement={<div style={{height: `100%`}}/>}
        />
      </CCardBody>
    </CCard>
  )
}

export default ReactGoogleMaps
