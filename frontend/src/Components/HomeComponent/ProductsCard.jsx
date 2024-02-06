import {
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Sass/ProductsCard.css";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdOutlineDetails } from "react-icons/md";
function ProductsCard({ data }) {
  const navigate = useNavigate();
  return (
    <Box p={5} boxShadow="md" borderRadius="lg" aspectRatio={"1 / 1"}>
      <Box
        className="img-box"
        overflow="hidden"
        borderRadius="md"
        onClick={() => {
          navigate(`/products/${data.id}`);
        }}
      >
        <Image
          h={"15em"}
          objectFit={"contain"}
          display={"block"}
          mx={"auto"}
          src={data.image}
          alt={data.name}
        />
      </Box>
      <Stack spacing={2} align="center" p={2}>
        <Heading as="h4" size="md">
          {data.name}
        </Heading>
        <Text fontSize="lg" fontWeight="bold">
          ${(data.price / 100).toFixed(2)}
        </Text>
        <Button leftIcon={<FaHeart />} variant="outline" colorScheme="pink">
          Wishlist
        </Button>
        <Button
          leftIcon={<MdOutlineDetails />}
          variant="outline"
          colorScheme="pink"
          onClick={() => navigate(`/products/${data.id}`)}
        >
          Get Details
        </Button>
      </Stack>
    </Box>
  );
}

export default ProductsCard;
