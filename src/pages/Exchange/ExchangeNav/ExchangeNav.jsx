import { Flex, HStack, Box } from '@chakra-ui/react'
import Statistics from './components/Statistics'
import Search from './components/Search'
import { Logo } from './components/Logo'

export default function ExchangeNav({ 
    currenciesTo, 
    onClick,
    setCurrencyBase,
    setCurrencyTo,
}) {

    return (
        <HStack spacing='24px'>
            <Box width={'30%'}>
                <Logo />
            </Box>
            <Box width={'50%'}>
                <Search currenciesTo={currenciesTo} onClick={onClick} setCurrencyBase={setCurrencyBase} setCurrencyTo={setCurrencyTo}/>
            </Box>
            <Box width={'20%'} >
                <Flex color='white'>
                    <Statistics numberOfCountries={currenciesTo?.length} lastDateOfUpdate={currenciesTo ? currenciesTo[0]?.date : new Date().toDateString()} />
                </Flex>
            </Box>
        </HStack>
    )
}