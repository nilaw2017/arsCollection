import * as react from "react";
import { Box, Grid, Image } from "@chakra-ui/react";
import CButton from "../../../components/CButton";

function ServicesOfferSection() {
  return (
    <Grid
      as="section"
      pt={"100px"}
      pb={"100px"}
      gap={"100px"}
      gridTemplateRows={{ base: "", lg: "repeat(3,1fr)" }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        data-aos="fade-up"
      >
        <Box
          color={"#141414"}
          fontSize={"36px"}
          position={"relative"}
          _before={{
            content: '""',
            position: "absolute",
            bottom: "0",
            width: "130px",
            height: "4px",
            backgroundColor: "#f67366",
          }}
        >
          <Box as="span" fontWeight={"700"}>
            Services
          </Box>{" "}
          We Offer
        </Box>
        <Box>
          <Image src="./src/assets/images/homepage/services-offer.svg" />
        </Box>
      </Box>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        justifyContent={"space-between"}
        gap={"75px"}
      >
        <Box
          data-aos="fade-up"
          color={"#2C2D5B"}
          fontWeight={"600"}
          fontSize={"24px"}
          textAlign={{ base: "center", md: "left" }}
        >
          <Image
            m={{ base: "auto", md: "left" }}
            src="./src/assets/images/homepage/warehousingSolution.svg"
          />
          Warehouse Services
          <Box
            color={"#4f4f4f"}
            fontSize={"14px"}
            mt={"20px"}
            fontWeight={"400"}
          >
            A pay as-you-go solution for: pallet storage, inventory management,
            fulfillment(e.g. pick and pack), in/out-bound solutions, and more.
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          data-aos-delay="100"
          color={"#2C2D5B"}
          fontWeight={"600"}
          fontSize={"24px"}
          textAlign={{ base: "center", md: "left" }}
        >
          <Image
            m={{ base: "auto", md: "left" }}
            src="./src/assets/images/homepage/globalFreight.svg"
          />
          Global Freight
          <Box
            color={"#4f4f4f"}
            fontSize={"14px"}
            mt={"20px"}
            fontWeight={"400"}
          >
            Search and compare the best shipping rates among dozens of trusted
            logistic partners for the last mile delivery and freight.
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          data-aos-delay="200"
          color={"#2C2D5B"}
          fontWeight={"600"}
          fontSize={"24px"}
          textAlign={{ base: "center", md: "left" }}
        >
          <Image
            m={{ base: "auto", md: "left" }}
            src="./src/assets/images/homepage/packageSolutions.svg"
          />
          Packaging Solutions
          <Box
            color={"#4f4f4f"}
            fontSize={"14px"}
            mt={"20px"}
            fontWeight={"400"}
          >
            Our packaging solutions are optimized for each individual customer
            and are selected based on on the customer’s specific needs and
            requirements.
          </Box>
        </Box>
      </Grid>
      <Box textAlign={"center"}>
        <CButton bg={"#2C2D5B"} color={"#fff"}>
          Contact Us
        </CButton>
      </Box>
    </Grid>
  );
}

export default ServicesOfferSection;
