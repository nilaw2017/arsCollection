import { Box, Container, HStack, Image, VStack } from "@chakra-ui/react";
import * as react from "react";

function HomeHeroSection() {
  return (
    <Box as="section">
      <Box display={"inline-block"} w="100%" position={"relative"}>
        <Image src="./src/assets/images/homepage/hero-section.svg" />
        <HStack position={"absolute"} top={"0"} right={"0"} height={"100%"}>
          <Container maxW={"6xl"}>
            <VStack maxW={"596px"} textAlign={{base:"center",md:"left"}}>
              <Box as="h1" fontSize={{base:"30px", md:"40px"}} fontWeight={"600"}>
                Quick & Reliable{" "}
                <Box as={"span"} fontWeight={"700"} color={"#f67366"}>
                  Warehousing and Logistics
                </Box>{" "}
                Solution.
              </Box>
              <Box color={"#333"}>
                ShipUp delivers an unparalleled customer service through
                dedicated customer teams, engaged people working in an agile
                culture, and a global footprint
              </Box>
            </VStack>
          </Container>
          <Image display={{base: "none", lg:"block"}} src="./src/assets/images/homepage/womanOnScooty.svg" />
        </HStack>
      </Box>
    </Box>
  );
}

export default HomeHeroSection;
