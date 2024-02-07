import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Box,
} from "@chakra-ui/react"; // Import Bootstrap CSS
import Header from "./HomeComponent/Header";
import Footer from "./HomeComponent/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import AddToCartButton from "./HomeComponent/AddToCartButton";
import BuyNowButton from "./HomeComponent/BuyNowButton";

function SingleProductData() {
  const { _id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://costcocombackend-production.up.railway.app/products/${_id}`
        );
        // Check if the response structure is as expected
        console.log("Response:", response);
        if (response.status === 200) {
          setData(response.data);
          setLoading(false);
        } else {
          console.error("Fetch error:", response);
          setLoading(false);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [_id]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Box>
      <Header />
      <Card
        p={"1em"}
        maxW={{ base: "90%", md: "80%", lg: "50%" }}
        mx={"auto"}
        mt={"1em"}
        mb={"1em"}
      >
        <CardBody>
          <Image
            display={"block"}
            mx={"auto"}
            src={data[0]?.image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading
              size="md"
              fontFamily={"poppins"}
              fontWeight="bold"
              fontSize={"4xl"}
            >
              {data[0]?.name}
            </Heading>
            <Text fontSize={"xxl"} fontFamily={"poppins"}>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="3xl" fontWeight="bold">
              ${data[0]?.price / 100}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <BuyNowButton />
            <AddToCartButton />
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Footer />
    </Box>
  );
}

export default SingleProductData;
