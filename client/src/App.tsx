import * as React from "react"
import {
  ChakraProvider,

  theme,
} from "@chakra-ui/react"
import WithSubnavigation from "./components/navbar/Navbar";

export const App = () => (
  <ChakraProvider theme={theme}>
  <WithSubnavigation/>
  </ChakraProvider>
)
