import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
} from '@chakra-ui/react';

export default function ExchangeResult({ imgCountry, imgCountryFlag}) {
    return (
        <Container maxW={'7xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'Country image'}
                        src={imgCountry}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }} justifyContent={'center'}>
                    <Stack direction={['column', 'row']} spacing='24px' justifyContent={'center'}>
                        <Box w='210px' h='40px'>
                            <Heading
                                lineHeight={0.6}
                                fontWeight={500}
                                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                Exchange
                            </Heading>
                        </Box>
                        <Box w='40px' h='40px'>
                            <Image
                                rounded={'md'}
                                alt={'Flag image'}
                                src={imgCountryFlag}
                                fit={'cover'}
                                align={'center'}
                                w={'40px'}
                                h={'40px'}
                            />
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
                            <List spacing={2}>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Currency:
                                    </Text>{' '}
                                    leather strap
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Currency code:
                                    </Text>{' '}
                                    leather strap
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Exchange rate:
                                    </Text>{' '}
                                    20 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Inverse rate:
                                    </Text>{' '}
                                    20 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Updated At:
                                    </Text>{' '}
                                    Steel
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