import * as React from "react"
import {ChakraProvider, theme,} from "@chakra-ui/react"
import WithSubnavigation from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home";

export const App = () => (
    <ChakraProvider theme={theme}>
        <WithSubnavigation/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </ChakraProvider>
)
