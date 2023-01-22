import { Select, HStack, Box, Button } from '@chakra-ui/react'

export default function Search({ currenciesTo, onClick, setCurrencyTo, setCurrencyBase }) {
    return (
        <>
            <form onSubmit={onClick}>
                <HStack justifyContent={'center'}>
                    <Box width={'20%'}>
                        <Select placeholder='Currency Base' onChange={(event) => { setCurrencyBase(event.target.value) }}>
                            <option value='usd'>USD</option>
                        </Select>
                    </Box>
                    <Box width={'20%'}>
                        <Select placeholder='Currency' onChange={(event) => { setCurrencyTo(event.target.value) }}>
                            {
                                currenciesTo?.map(({ alphaCode, name }, index) =>
                                    <option key={index} value={alphaCode?.toLowerCase()}>{name}</option>
                                )
                            }
                        </Select>
                    </Box>
                    <Box width={'20%'}>
                        <Button type='submit'>Search</Button>
                    </Box>
                </HStack>
            </form>
        </>
    )
}