import React from "react"
import {Box, Center, Flex, Text, useColorModeValue} from "@chakra-ui/react";

export const TypeCard = () => {
    return <Center py={6}>
        <Box
            maxW={'350px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
                Icon
                <Text
                    color={'green.500'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'sm'}
                    letterSpacing={1.1}>
                    This is the text i need
                </Text>
            </Flex>
        </Box>
    </Center>

}