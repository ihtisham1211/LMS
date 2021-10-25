import * as React from "react"
import {ChakraProvider, SimpleGrid, theme,} from "@chakra-ui/react"
import WithSubnavigation from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Carousel from "./components/carousel/Carousel";
import ColumnGrid from "./components/columnGrid/ColumnGrid";
import Card from "./components/card/Card";

export const App = () => (
    <ChakraProvider theme={theme}>
        <WithSubnavigation/>
        <Carousel/>

        <SimpleGrid columns={{base: 1, md: 3}} spacing={10}>
            <Card/>
            <Card/>
            <Card/>
        </SimpleGrid>
        <ColumnGrid/>
        <Footer/>
    </ChakraProvider>
)
