import { Button } from "@chakra-ui/react";
import * as react from "react";

export default function CButton({
  bg,
  w,
  border,
  color,
  fontSize,
  children,
  m,
  mt,
  mb,
  ms,
  me,
}) {
  return (
    <Button
      bg={bg}
      w={w}
      border={border}
      color={color}
      fontSize={fontSize}
      rounded={"12px"}
      p="25px 50px"
      m={m}
      mt={mt}
      mb={mb}
      ms={ms}
      me={me}
    >
      {children}
    </Button>
  );
}
