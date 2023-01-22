import { Flex, HStack, Box } from '@chakra-ui/react'
import Statistics from './components/Statistics'
import Search from './components/Search'

export default function ExchangeNav({ countries }) {

    return (
        <HStack spacing='24px'>
            <Box width={'20%'}>


            </Box>
            <Box width={'50%'}>
                <Search />
            </Box>
            <Box width={'30%'} >
                <Flex color='white'>
                    <Statistics numberOfCountries={countries?.length} lastDateOfUpdate={new Date().toLocaleDateString()} />
                </Flex>
            </Box>
        </HStack>
    )
}