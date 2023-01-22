import React, { useMemo, useState } from 'react'
import { getGeoPosition, BING_MAP_TOKEN } from '../../../../services/GeoPosition'

import BingMapsReact from "bingmaps-react";
import { AspectRatio} from '@chakra-ui/react';

export default function Map({ country }) {

    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    useMemo(() => {
        getGeoPosition(country)
            .then((result) => {
                if (result) {
                    const { lat, lng } = result
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
            borderRadius={'24px'}
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