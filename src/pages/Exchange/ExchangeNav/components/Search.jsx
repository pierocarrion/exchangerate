import { Select, HStack, Box, Button } from '@chakra-ui/react'

export default function Search({ currenciesTo, onClick, setCurrencyTo, setCurrencyBase }) {
    return (
        <>
            <form onSubmit={onClick}>
                <HStack justifyContent={'center'} spacing={5}>
                    <Box >
                        <Select placeholder='Currency Base' defaultValue={'usd'} onChange={(event) => { setCurrencyBase(event.target.value) }}>
                            <option value='usd'>USD</option>
                        </Select>
                    </Box>
                    <Box >
                        <Select placeholder='Currency' onChange={(event) => { setCurrencyTo(event.target.value) }}>
                            {
                                currenciesTo?.map(({ alphaCode, name }, index) =>
                                    <option key={index} value={alphaCode?.toLowerCase()}>{name}</option>
                                )
                            }
                        </Select>
                    </Box>
                    <Box>
                        <Button type='submit'>Search</Button>
                    </Box>
                </HStack>
            </form>
        </>
    )
}