import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function ForImageSection() {
  const navigate = useNavigate();
  return (
    <Box
      // aspectRatio={"3/2"}
      display={"grid"}
      gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
    >
      <Image
        display={"block"}
        src="https://mobilecontent.costco.com/live/resource/img/24w05161/24w05161-hf-banner-costco-direct-home.jpg"
        alt="first image"
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      ></Image>
      <Image
        display={"block"}
        src="https://mobilecontent.costco.com/live/resource/img/24w05161/24w05161-hf-banner-costco-direct-appliances.jpg"
        alt="sec image"
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      ></Image>
      <Image
        display={"block"}
        src="https://mobilecontent.costco.com/live/resource/img/24w05161/24w05161-hf-banner-costco-direct-patio.jpg"
        alt="th image"
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      ></Image>
      <Image
        display={"block"}
        src="https://mobilecontent.costco.com/live/resource/img/24w05161/24w05161-hf-banner-costco-direct-multi.jpg"
        alt="for image"
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      ></Image>
    </Box>
  );
}

export default ForImageSection;
