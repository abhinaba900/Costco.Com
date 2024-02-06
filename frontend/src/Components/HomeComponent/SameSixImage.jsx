import React from "react";
import { Image, Grid, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function SameSixImage() {
  const navigate = useNavigate();
  return (
    <Grid
      fontFamily={"poppins"}
      textAlign={"center"}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={6}
      mt={10}
      p={10}
      mb={10}
      bg={"white"}
    >
      <Box
        bg={"#F0F0E6"}
        borderRadius={"20px"}
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      >
        <Image
          src="https://mobilecontent.costco.com/live/resource/img/20240205_Hot_Buys_TRV_Img/20240205_MKT_Hot_Buys_.jpg"
          alt="vacation"
        />
        <Box w={"100%"} mt={2}>
          <Text fontSize={"1em"} fontWeight={"bold"}>
            VACATIONS IN MEXICO, CARIBBEAN, HAWAII & MORE
          </Text>
        </Box>
      </Box>
      <Box
        bg={"#FBEDF2"}
        borderRadius={"20px"}
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      >
        <Image
          src="https://mobilecontent.costco.com/live/resource/img/24w04229/24w04229_half-banner_jan_mailer.jpg"
          alt="vacation"
        />
        <Box w={"100%"} mt={2}>
          <Text fontSize={"1em"} fontWeight={"bold"}>
            VALID 1/26/24 - 2/25/24
          </Text>
        </Box>
      </Box>
      <Box
        bg={"#333333"}
        borderRadius={"20px"}
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      >
        <Image
          src="https://mobilecontent.costco.com/live/resource/img/24w03282/24w03282-banner-mvm-jan-bfg.jpg"
          alt="vacation"
        />
        <Box w={"100%"} mt={2}>
          <Text fontSize={"1em"} fontWeight={"bold"} color={"white"}>
            VALID 1/31/24 – 2/25/24 | *SEE TIRE CENTER FOR DETAILS
          </Text>
        </Box>
      </Box>
      <Box
        bg={"#333333"}
        borderRadius={"20px"}
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      >
        <Image
          src="https://mobilecontent.costco.com/live/resource/img/24w06065/24w06065_third_banner_dove_nexxus_2.jpg"
          alt="vacation"
        />
        <Box w={"100%"} mt={2}>
          <Text fontSize={"1em"} fontWeight={"bold"} color={"white"}>
            VALID 2/5/24 - 2/18/24
          </Text>
        </Box>
      </Box>
      <Box
        bg={"#333333"}
        borderRadius={"20px"}
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      >
        <Image
          src="https://mobilecontent.costco.com/live/resource/img/24w06030/24w06030_third_banner_hellmanns.jpg"
          alt="vacation"
        />
        <Box w={"100%"} mt={2}>
          <Text fontSize={"1em"} fontWeight={"bold"} color={"white"}>
            VALID 1/31/24 - 2/25/24
          </Text>
        </Box>
      </Box>
      <Box
        bg={"#D72930"}
        borderRadius={"20px"}
        onClick={() => navigate("/products")}
        cursor={"pointer"}
      >
        <Image
          src="https://mobilecontent.costco.com/live/resource/img/24w06064/m-24w06064-banner-enfagrow.jpg"
          alt="vacation"
        />
        <Box w={"100%"} mt={2}>
          <Text fontSize={"1em"} fontWeight={"bold"} color={"white"}>
            WHILE SUPPLIES LAST
          </Text>
        </Box>
      </Box>
    </Grid>
  );
}

export default SameSixImage;
