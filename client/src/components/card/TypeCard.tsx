import React from "react"
import {Box, Center, Flex, Text} from "@chakra-ui/react";

interface Props {
    name: string
    icon: JSX.Element
    backgroundColor: string
}

export const TypeCard = ({name, icon, backgroundColor}: Props) => {
    return <Center py={6}>
        <Box
            maxW={'300px'}
            w={'full'}
            bg={backgroundColor}
            boxShadow={'2xl'}
            rounded={'md'}
            p={5}
            overflow={'hidden'}>
            <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
                {icon}
                <Text
                    color={'white'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'sm'}
                    letterSpacing={1.1}>
                    {name}
                </Text>
            </Flex>
        </Box>
    </Center>

}