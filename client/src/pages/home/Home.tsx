import Carousel from "../../components/carousel/Carousel";
import {SimpleGrid} from "@chakra-ui/react";
import Card from "../../components/card/Card";
import ColumnGrid from "../../components/columnGrid/ColumnGrid";
import * as React from "react";
import {TypeCard} from "../../components/card/TypeCard";


export const Home = () => {
    return <>
        <Carousel/>
        <SimpleGrid columns={{base: 1, md: 4}} spacing={6}>
            <TypeCard/>
            <TypeCard/>
            <TypeCard/>
            <TypeCard/>
        </SimpleGrid>
        <SimpleGrid columns={{base: 1, md: 3}} spacing={10}>
            <Card/>
            <Card/>
            <Card/>
        </SimpleGrid>
        <ColumnGrid/>
    </>
}

