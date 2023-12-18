import {
  Box,
  Container,
  HStack,
  Image,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import * as react from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
function TopMenu() {
  return (
    <>
      <Container maxW="6xl">
        <HStack bg={"transparent"} pt={"25px"}>
          <Image src="./src/assets/images/logos/logo.svg" />
          <Box>
            <Menu>
              <Link to="/">
                <MenuButton p="10px">Company</MenuButton>
              </Link>
            </Menu>
            <Menu>
              <Link to="/login">
                <MenuButton p="10px">Login</MenuButton>
              </Link>
            </Menu>
          </Box>
        </HStack>
      </Container>
    </>
  );
}

export default TopMenu;
