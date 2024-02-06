import React from "react";
import { Grid, Box, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function ThreeCatagorySection() {
  const navigate = useNavigate();
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={6}
      mt={10}
      p={10}
      mb={10}
      fontFamily={"poppins"}
      textAlign={"center"}
    >
      <Box
        p={5}
        bg={"#F9CC8D"}
        borderRadius={"20px"}
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      >
        <Heading>Kids' Apparel</Heading>
        <Image
          src="https://mobilecontent.costco.com/staging/resource/img/24w06073/24w06073_third_hero_kids.jpg"
          alt="kids image"
        />
      </Box>
      <Box
        p={5}
        bg={"#CCF9B7"}
        borderRadius={"20px"}
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      >
        <Heading>Men’s Apparel</Heading>
        <Image
          src="https://mobilecontent.costco.com/staging/resource/img/24w06072/24w06072_third_hero_mens.jpg"
          alt=" men image"
        />
      </Box>
      <Box
        p={5}
        bg={"#B7E2F9"}
        borderRadius={"20px"}
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      >
        <Heading>Ladies' Apparel</Heading>
        <Image
          src="https://mobilecontent.costco.com/staging/resource/img/24w06071/24w06071_third_hero_ladies.jpg"
          alt=" ladies image"
        />
      </Box>
    </Grid>
  );
}

export default ThreeCatagorySection;
