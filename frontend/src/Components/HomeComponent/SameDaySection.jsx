import React from "react";
import { Box, Image, Text, Grid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function SameDaySection() {
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
        backgroundColor={"#EFF7FB"}
        p={10}
        borderRadius={"20px"}
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      >
        <Text fontSize={"2em"} fontWeight={"bold"} color={"#0B6E22"}>
          Same-Day
        </Text>
        <Text fontSize="1.3em" fontWeight="bold">
          Fresh, frozen & household essentials delivered.
        </Text>
        <Image
          src="https://mobilecontent.costco.com/live/resource/img/24w01105/24w01105-third-hero-grocery-same-day-v3.png"
          alt="same day"
        />
      </Box>
      <Box
        backgroundColor={"#EFF7FB"}
        p={10}
        borderRadius={"20px"}
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      >
        <Text fontSize={"2em"} fontWeight={"bold"} color={"#002BA2"}>
          2-Day
        </Text>
        <Text fontSize="1.3em" fontWeight="bold">
          Non-perishable food & household essentials delivered.
        </Text>
        <Image
          src="https://mobilecontent.costco.com/staging/resource/img/24w01105/24w01105-third-hero-grocery-2-day-2.jpg"
          alt="same day"
        />
      </Box>
      <Box
        backgroundColor={"#EFF7FB"}
        p={10}
        borderRadius={"20px"}
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      >
        <Text fontSize={"2em"} fontWeight={"bold"} color={"#002BA2"}>
          Costco NEXT
        </Text>
        <Text fontSize="1.3em" fontWeight="bold">
          Buy direct from high-end brands at a Costco price.
        </Text>
        <Image
          src="https://mobilecontent.costco.com/staging/resource/img/24w01105/24w01105-third-hero-grocery-costco-next-2.jpg"
          alt="same day"
        />
      </Box>
    </Grid>
  );
}

export default SameDaySection;
