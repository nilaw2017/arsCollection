import { Box, Grid, HStack, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import { color } from "framer-motion";

function Footer() {
  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
      color={"#fff"}
      columnGap={{ base: "0", md: "50px", xl: "168px" }}
      rowGap={{ base: "50px" }}
    >
      {/* LOGO */}
      <Box gridColumn={{ base: "1/span3", md: "auto" }}>
        LOGO HERE
        <Box fontSize={"14px"}>
          ShipUp delivers an unparalleled customer service through dedicated
          customer teams, engaged people working in an agile culture, and a
          global footprint
        </Box>
      </Box>

      {/* EXPLORE */}
      <Box>
        <Box>
          <Box as="h2" fontWeight={"700"} fontSize={"18px"} mb="20px">
            Explore
          </Box>

          <VStack as="h5" gap={"10px"} alignItems={"start"}>
            <Link to="/about-us">
              <Box fontSize={"14px"} fontWeight={"500"}>
                About Us
              </Box>
            </Link>
            <Link to="/location">
              <Box fontSize={"14px"} fontWeight={"500"}>
                Our Warehouse in China
              </Box>
            </Link>
            <Link to="/service">
              <Box fontSize={"14px"} fontWeight={"500"}>
                Our Services
              </Box>
            </Link>
          </VStack>
        </Box>
      </Box>

      {/* LEGAL */}
      <Box>
        <Box>
          <Box as="h2" fontWeight={"700"} fontSize={"18px"} mb="20px">
            Legal
          </Box>

          <VStack as="h5" gap={"10px"} alignItems={"start"}>
            <Link to="/about-us">
              <Box fontSize={"14px"} fontWeight={"500"}>
                Terms and Policies
              </Box>
            </Link>
          </VStack>
        </Box>
      </Box>

      {/* SOCIAL MEDIA */}
      <Box gridColumn={{ base: " 1/span3", md:"auto" }}>
        <Box as="h2" fontWeight={"700"} fontSize={"18px"} mb="20px">
          Social Media
        </Box>
        <VStack as="h5" gap={"10px"} alignItems={"start"}>
          <Grid
            w="100%"
            gridTemplateColumns={"repeat(3,1fr)"}
            justifyContent={"space-evenly"}
          >
            <Box
              as="span"
              p="10px"
              backgroundColor={"#fff"}
              color={"#322A58"}
              w={"fit-content"}
              rounded={"50%"}
            >
              <FaFacebookF />
            </Box>
            <Box
              as="span"
              p="10px"
              backgroundColor={"#fff"}
              color={"#322A58"}
              w={"fit-content"}
              rounded={"50%"}
            >
              <FaInstagram />
            </Box>
            <Box
              as="span"
              p="10px"
              backgroundColor={"#fff"}
              color={"#322A58"}
              w={"fit-content"}
              rounded={"50%"}
            >
              <FaTiktok />
            </Box>
          </Grid>
        </VStack>
      </Box>
    </Grid>
  );
}

export default Footer;
