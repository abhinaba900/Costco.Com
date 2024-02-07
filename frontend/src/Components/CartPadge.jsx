import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Footer from "./HomeComponent/Footer";
import { useNavigate } from "react-router-dom";
function CartPadge() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box background={"#ECECEC"} p={"2em"}>
        <Image
          onClick={() => navigate("/")}
          cursor={"pointer"}
          w={"9.375em"}
          display={"block"}
          mx={"auto"}
          src="https://signin-ui.costco.com/ecomssoui/567/common/Images/logo-bc-us.svg"
          alt="main-logo"
        />
      </Box>
      <Footer />
    </Box>
  );
}

export default CartPadge;
