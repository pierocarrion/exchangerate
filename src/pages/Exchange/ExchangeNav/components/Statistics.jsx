import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    StatHelpText,
    StatArrow,
    StatGroup
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';

function StatsCard({
    title,
    stat,
    icon
}) {
    return (
        <StatGroup>
            <Stat>
                <StatLabel>{title}</StatLabel>
                <StatNumber>{stat ?? 0}</StatNumber>
                <StatHelpText>
                    <StatArrow type='increase' />
                </StatHelpText>
            </Stat>

        </StatGroup>
    );
}

export default function Statistics({
    numberOfCountries,
    lastDateOfUpdate
}) {
    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard
                    title={'Currencies'}
                    stat={numberOfCountries}
                    icon={<BsPerson size={'3em'} />}
                />
                <StatsCard
                    title={'Last Update'}
                    stat={lastDateOfUpdate}
                    icon={<FiServer size={'3em'} />}
                />
                <StatsCard
                    title={'Queries'}
                    stat={0}
                    icon={<FiServer size={'3em'} />}
                />
            </SimpleGrid>
        </Box>
    );
}