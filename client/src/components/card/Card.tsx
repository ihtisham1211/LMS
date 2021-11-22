import {Box, Center, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import React from "react"

export default function Card() {
    return (
        <Center py={6}>
            <Box
                maxW={'400px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                mx={4}
                p={6}>
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <img
                        alt={'course-image'}
                        src={
                            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        style={{height: "inherit"}}
                    />
                </Box>
                <Stack>
                    <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        Titile
                    </Text>
                    <Text color={'gray.500'}>
                        Des
                    </Text>
                </Stack>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontWeight={600}>Auther</Text>
                    <Text color={'gray.500'}>time</Text>
                </Stack>
            </Box>
        </Center>
    );
}
