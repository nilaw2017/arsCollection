import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page_404 from "./pages/Page_404";
import Index from "./pages/home_page/views";
import HomePage from "./pages/home_page/views/homepage/HomePage";
import Login from "./pages/home_page/views/login/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Routes>
            <Route path="*" element={<Page_404 />} />
            <Route path="/" element={<Index />}>
              <Route index element={<HomePage />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
