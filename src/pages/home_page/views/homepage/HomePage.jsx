import { Box, Container, HStack } from "@chakra-ui/react";
import * as react from "react";
import HomeHeroSection from "../../components/HomeHeroSection";
import ServicesOfferSection from "../../components/ServicesOfferSection";
import OperationMode from "../../components/OperationMode";
import Footer from "../../../../components/layout/Footer";

function HomePage() {
  return (
    <>
      <Box>
        <HomeHeroSection />
        {/* SERVICES WE OFFER */}
        <Box bg={"#F4F6F9"}>
          <Container maxW={"6xl"}>
            <ServicesOfferSection />
          </Container>
        </Box>

        {/* OPERATION MODE */}
        <Box p={"100px 0"}>
          <Container maxW="6xl">
            <OperationMode />
          </Container>
        </Box>

        <Box p={"50px 10px"} backgroundColor={"#2C2D5B"}>
          <Container maxW={{base:"100%", xl:"6xl"}}>
            <Footer />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
