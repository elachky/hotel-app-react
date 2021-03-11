// import React from 'react';
// import GoogleMapReact from 'google-map-react';

// import './HotelLocation.css';

// const LocationPin = ({ text }) => (
//     <div className="pin">
//       <Icon icon={locationIcon} className="pin-icon" />
//       <p className="pin-text">{text}</p>
//     </div>
//   )

// const HotelLocatio = ({hotel}) => {

//     const location = {
//         // adress: '1600 Amphitheatre Parkway, Mountain View, california.',
//         // lat: parseFloat(hotel?hotel.location.lat:6.5),
//         // lng: parseFloat(hotel?hotel.location.long:6.5)
//         address: '1600 Amphitheatre Parkway, Mountain View, california.',
//         lat: 37.42216,
//         lng: -122.08427,
//     }
//     return (<div className="map">
//         <h2 className="map-h2">Come Visit Us At Our Campus</h2>

//         <div className="google-map">
//         <GoogleMapReact
//             bootstrapURLKeys={{ key: 'AIzaSyCK5YUqzUmXG__unY8fPS2T09fHtMSBeq4' }}
//             defaultCenter={location}
//             defaultZoom='7'
//         >
//             <LocationPin
//             lat={location.lat}
//             lng={location.lng}
//             text={location.address}
//             />
//         </GoogleMapReact>
//         </div>
//     </div>);
// }

// export default HotelLocatio;

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export const MapContainer = (props) => {

    return (<div className='contai-map'>
      <Map google={props.google} style={{width: '400px',height: '400px'}} zoom={14}>
        <Marker name={'Current location'}  />
      </Map>
    </div>
    );
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCK5YUqzUmXG__unY8fPS2T09fHtMSBeq4")
})(MapContainer)