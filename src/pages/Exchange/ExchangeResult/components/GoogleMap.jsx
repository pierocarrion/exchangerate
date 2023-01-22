import React from 'react'
import GoogleMapReact from 'google-map-react'


function LocationPin({ text })  {
    return (<></>)

    // <div className="pin">
    //     <Icon icon={locationIcon} className="pin-icon" />
    //     <p className="pin-text">{text}</p>
    // </div>
}

export default function GoogleMap({ lat= '1', lng= '1', address }) {
    return (
        <div className="map">
            <h2 className="map-h2">Come Visit Us At Our Campus</h2>

            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg' }}
                    defaultCenter={{ lat, lng }}
                    defaultZoom={17}
                >
                    <LocationPin
                        lat={lat}
                        lng={lng}
                        text={address}
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}