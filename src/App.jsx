import Footer from "./components/Footer";
import Home from "./layouts/Home";
import {Box} from '@chakra-ui/react'

export default function App () {

    return (
        <>
            <Home />
			<Box px='24px' mx='auto' width='1044px' maxW='100%'>
				<Footer />
			</Box>
        </>
    )
}