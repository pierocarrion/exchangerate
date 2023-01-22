import React, { useMemo, useState } from 'react'
import { getGeoPosition, BING_MAP_TOKEN } from '../../../../services/GeoPosition'

import BingMapsReact from "bingmaps-react";

export default function Map({ country }) {

    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    useMemo(() => {
        getGeoPosition(country).then(({ lat, lng }) => {
            if (lat && lng) {
                setLatitude(lat)
                setLongitude(lng)
            }
        })
            .catch(console.log)
    }, [country])

    return (
        (latitude && longitude) &&
        <BingMapsReact
            bingMapsKey={BING_MAP_TOKEN}
            w={'100%'}
            rounded={'md'}
            alt={'Map'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
            mapOptions={{
                navigationBarMode: "square",
            }}
            viewOptions={{
                center: { latitude, longitude },
                zoom: 7
            }}
        />
    )
}