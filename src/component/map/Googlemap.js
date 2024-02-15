import React, { useEffect, useState } from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
    width: '800px',
    height: '600px',
    margin: 'auto',
};

const center = {
    lat: -3.745,
    lng: -38.523
};


const Googlemap = () => {
    const [currentPosition, setCurrentPosition] = useState(null);
    const [response, setResponse] = useState(null);
    const [directionsError, setDirectionsError] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setCurrentPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                error => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    const directionsCallback = (response, status) => {
        if (status === 'OK') {
            setResponse(response);
        } else {
            setDirectionsError(`Directions request failed: ${status}`);
        }
    };


    return (
        <div className="coustom_container">
            <div className='top-padding pb-4'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={currentPosition}
                    zoom={10}
                >
                    {currentPosition && (
                        <DirectionsService
                            options={{
                                destination: 'chandigarh, ON',
                                origin: currentPosition,
                                travelMode: 'DRIVING'
                            }}
                            callback={directionsCallback}
                        />
                    )}
                    {response && (
                        <DirectionsRenderer
                            options={{ directions: response }}
                        />
                    )}
                    {directionsError && <p>{directionsError}</p>}
                </GoogleMap>
            </div>
        </div>
    )
}

export default Googlemap
