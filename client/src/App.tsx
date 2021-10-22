import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme, Stack,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Stack spacing={3}>
            <Text fontSize="6xl">(6xl) In love with React & Next</Text>
            <Text fontSize="5xl">(5xl) In love with React & Next</Text>
            <Text fontSize="4xl">(4xl) In love with React & Next</Text>
            <Text fontSize="3xl">(3xl) In love with React & Next</Text>
            <Text fontSize="2xl">(2xl) In love with React & Next</Text>
            <Text fontSize="xl">(xl) In love with React & Next</Text>
            <Text fontSize="lg">(lg) In love with React & Next</Text>
            <Text fontSize="md">(md) In love with React & Next</Text>
            <Text fontSize="sm">(sm) In love with React & Next</Text>
            <Text fontSize="xs">(xs) In love with React & Next</Text>
          </Stack>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
