import {
    Box,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup
} from '@chakra-ui/react';

function StatsCard({
    title,
    stat
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
                />
                <StatsCard
                    title={'Last Update'}
                    stat={lastDateOfUpdate}
                />
                <StatsCard
                    title={'Queries'}
                    stat={0}
                />
            </SimpleGrid>
        </Box>
    );
}