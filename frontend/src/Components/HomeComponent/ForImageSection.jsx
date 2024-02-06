import React from "react";
import { Box, Image } from "@chakra-ui/react";

function ForImageSection() {
  return (
    <Box
      // aspectRatio={"3/2"}
      display={"grid"}
      gridTemplateColumns={"repeat(2,1fr)"}
    >
      <Image
        display={"block"}
        src="https://mobilecontent.costco.com/live/resource/img/24w05161/24w05161-hf-banner-costco-direct-home.jpg"
        alt="first image"
      ></Image>
      <Image
        display={"block"}
        src="https://mobilecontent.costco.com/live/resource/img/24w05161/24w05161-hf-banner-costco-direct-appliances.jpg"
        alt="sec image"
      ></Image>
      <Image
        display={"block"}
        src="https://mobilecontent.costco.com/live/resource/img/24w05161/24w05161-hf-banner-costco-direct-patio.jpg"
        alt="th image"
      ></Image>
      <Image
        display={"block"}
        src="https://mobilecontent.costco.com/live/resource/img/24w05161/24w05161-hf-banner-costco-direct-multi.jpg"
        alt="for image"
      ></Image>
    </Box>
  );
}

export default ForImageSection;
