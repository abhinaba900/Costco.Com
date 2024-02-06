import React from "react";
import { Box, Image } from "@chakra-ui/react";
function Error() {
  return (
    <Box>
      <Image
        display={"block"}
        mx={"auto"}
        my={"5em"}
        src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg"
        alt="page not found"
      />
    </Box>
  );
}

export default Error;
