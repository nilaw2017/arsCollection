import { Box, Flex, Grid, Image, VStack } from "@chakra-ui/react";
import * as react from "react";

export default function OperationMode() {
  return (
    <>
      <Box>
        <Image
          src="./src/assets/images/homepage/services-offer.svg"
          position={"relative"}
          top={"50px"}
        />
        <Box
          data-aos="fade-up"
          textAlign={"center"}
          color={"#141414"}
          fontSize={"36px"}
          position={"relative"}
          fontWeight={"400"}
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
            Operation
          </Box>{" "}
          Mode
        </Box>

        <Grid
          gridTemplateColumns={{ base: "", md: "repeat(2,1fr)" }}
          columnGap={"250px"}
          rowGap={"50px"}
          alignItems={"center"}
        >
          <Box
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-anchor-placement="bottom-bottom"
            order={{ base: 2, md: 1 }}
          >
            <Flex alignItems={"center"} gap={"30px"} mb={"40px"}>
              <Image src="./src/assets/images/homepage/1.operation.svg" />
              <Box
                as="span"
                fontSize={"40px"}
                color={"#f67366"}
                fontWeight={"900"}
              >
                Connect
              </Box>
            </Flex>
            <Box color={"#4f4f4f"} fontSize={"14px"}>
              You’re currently running your store on Shopify, WooCommerce, or
              any other platform. As a first step, you’ll connect your store
              with our platform.
            </Box>
          </Box>
          <Box
            data-aos="fade-left"
            data-aos-duration="1100"
            data-aos-anchor-placement="bottom-bottom"
            order={{ base: 1, md: 2 }}
            position={"relative"}
          >
            <Image src="./src/assets/images/homepage/1.connect.svg" />
            <Image
              src="./src/assets/images/homepage/operationCurve.svg"
              position={"absolute"}
              right={"100%"}
            />
          </Box>

          <Box
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-anchor-placement="bottom-bottom"
            order={{ base: 3, md: 3 }}
          >
            <Image src="./src/assets/images/homepage/2.store.svg" />
          </Box>
          <Box
            data-aos="fade-left"
            data-aos-duration="1100"
            data-aos-anchor-placement="bottom-bottom"
            order={{ base: 4, md: 4 }}
          >
            <Flex alignItems={"center"} gap={"30px"} mb={"40px"}>
              <Image src="./src/assets/images/homepage/2.operation.svg" />
              <Box
                as="span"
                fontSize={"40px"}
                color={"#f67366"}
                fontWeight={"900"}
              >
                Store
              </Box>
            </Flex>
            <Box color={"#4f4f4f"} fontSize={"14px"}>
              Then, you can send us your inventory and the fun begins. We’ll
              choose a delivery day together so your fulfilment is not
              interrupted.
            </Box>
          </Box>

          <Box
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-anchor-placement="bottom-bottom"
            order={{ base: 6, md: 5 }}
          >
            <Flex alignItems={"center"} gap={"30px"} mb={"40px"}>
              <Image src="./src/assets/images/homepage/3.operation.svg" />
              <Box
                as="span"
                fontSize={"40px"}
                color={"#f67366"}
                fontWeight={"900"}
              >
                Ship
              </Box>
            </Flex>
            <Box color={"#4f4f4f"} fontSize={"14px"}>
              We pick, pack and ship all incoming orders directly from our own
              warehouse until 12pm on the same day,
            </Box>
          </Box>
          <Box
            data-aos="fade-left"
            data-aos-duration="1100"
            data-aos-anchor-placement="bottom-bottom"
            order={{ base: 5, md: 6 }}
            position={"relative"}
          >
            <Image src="./src/assets/images/homepage/3.ship.svg" />
            <Image
              src="./src/assets/images/homepage/operationCurve.svg"
              position={"absolute"}
              right={"100%"}
              top={"0"}
              transform={"rotateY(180deg)"}
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
}
