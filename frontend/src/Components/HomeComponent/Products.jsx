import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthContextProvider";
import axios from "axios";
import {
  Box,
  Button,
  useBreakpointValue,
  Heading,
  Stack,
  Divider,
  Grid,
} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import ProductsCard from "./ProductsCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Loading from "../Loading";

function Products() {
  const { Products, setProducts } = useContext(AuthContext); // Assuming products is correctly named here
  const [numbers, setNumber] = useState(10);
  const [error, setError] = useState(""); // Added for error handling
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://costcocombackend-production.up.railway.app/products"
        );
        // Assuming the API returns an object with an allProducts key that is an array of products
        console.log(response?.data);
        const allProducts = response?.data; // Adjusted to access allProducts key
        if (allProducts) {
          setProducts(allProducts);
          setLoading(false);
        } else {
          setLoading(false);
          throw new Error("allProducts key not found");
        }
      } catch (error) {
        console.error(error);
        setError("Failed to load products"); // Update error state
        setLoading(false);
      }
    }
    fetchData();
  }, [setProducts]); // Added setProducts as a dependency

  const currentSlideProducts = Products.slice(0, numbers);


  if (loading) {
    return <Loading />;
  }
  return (
    <Box>
      <Header />
      {error && <Box color="red.500">{error}</Box>}{" "}
      {/* Display error if there is one */}
      <Box className="container">
        <Heading as="h2" size="lg" my={4}>
          Featured <b>Products</b>
        </Heading>
        <Grid
          mt={"3em"}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
          }}
          gap={6}
          borderRadius={"xl"}
          mb={6}
          aspectRatio={"3/2"}
        >
          {currentSlideProducts.map((product, index) => (
            <ProductsCard key={index} data={product} />
          ))}
        </Grid>
        <Divider />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="1em"
      >
        <Button onClick={() => setNumber(numbers + 10)}>View More</Button>
        <Button onClick={() => setNumber(10)}>View Less</Button>
      </Box>
      <Footer />
    </Box>
  );
}

export default Products;
