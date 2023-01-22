import {
    Box,
    Container,
    Stack,
    Text,
    Flex,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
} from '@chakra-ui/react';

import Flag from 'react-world-flags'

import Map from './components/Map';
import { useMemo, useState } from 'react';
import { getCountryWithCurrency } from '../../../services/GeoPosition';

export default function ExchangeResult({ currencyResult }) {

    const [ country, setCountry] = useState({ country : 'Peru', countryCode: 'PE'})
    console.log('🚀 ~ file: ExchangeResult.jsx:25 ~ ExchangeResult ~ country', country)

    useMemo(() => {
        getCountryWithCurrency(currencyResult?.alphaCode)
        .then((result) => setCountry(result))
    }, [ currencyResult ])

    return (
        <Container maxW={'7xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                    <Map country={country?.country} />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }} justifyContent={'center'}>
                    <Stack direction={['column', 'row']} spacing='24px' justifyContent={'center'}>
                        <Box w='320px' h='40px'>
                            <Heading
                                lineHeight={0.6}
                                fontWeight={500}
                                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                Exchange Rate
                            </Heading>
                        </Box>
                        <Box w='40px' h='40px' >
                            <Flag align='center' code={country?.countryCode} />
                        </Box>
                    </Stack>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.200', 'gray.600')}
                            />
                        }>
                        <Box>
                            <List spacing={4}>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Currency:
                                    </Text>{' '}
                                    {currencyResult?.name}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Currency code:
                                    </Text>{' '}
                                    {currencyResult?.alphaCode}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Exchange rate:
                                    </Text>{' '}
                                    {currencyResult?.rate}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Inverse rate:
                                    </Text>{' '}
                                    {currencyResult?.inverseRate}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Updated At:
                                    </Text>{' '}
                                    {currencyResult?.date}
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>
                    <Button
                        rounded={'none'}
                        w={'100%'}
                        align={'center'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg={useColorModeValue('gray.900', 'gray.50')}
                        color={useColorModeValue('white', 'gray.900')}
                        textTransform={'uppercase'}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}>
                        Share
                    </Button>
                </Stack>
            </SimpleGrid>
        </Container >
    );
}