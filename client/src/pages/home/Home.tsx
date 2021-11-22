import Carousel from "../../components/carousel/Carousel";
import {Flex, Heading, SimpleGrid} from "@chakra-ui/react";
import Card from "../../components/card/Card";
import ColumnGrid from "../../components/columnGrid/ColumnGrid";
import * as React from "react";
import {TypeCard} from "../../components/card/TypeCard";
import {IconAbout, IconCourse, IconEvents, IconPub} from "../../assets";


export const Home = () => {
    return <Flex direction={'column'} alignItems={'center'}>
        <Carousel/>
        <SimpleGrid columns={{base: 1, md: 4}} spacing={10}>
            <TypeCard name={'Courses'} backgroundColor={'#23A6F4'} icon={<IconCourse/>}/>
            <TypeCard name={'Publications'} backgroundColor={'#8CC14F'} icon={<IconPub/>}/>
            <TypeCard name={'Events'} backgroundColor={'#5D50C2'} icon={<IconEvents/>}/>
            <TypeCard name={'About us'} backgroundColor={'#F8423F'} icon={<IconAbout/>}/>
        </SimpleGrid>
        <Flex margin={10}>
            <Heading textDecoration={'underline'}>Some of our course</Heading>
        </Flex>
        <Flex alignItems={'center'} justify={'space-around'} overflowX={'scroll'} w={'90%'}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            {/*<Card/>*/}
            {/*<Card/>*/}
            {/*<Card/>*/}
            {/*<Card/>*/}
            {/*<Card/>*/}
        </Flex>
        <ColumnGrid/>
    </Flex>
}

