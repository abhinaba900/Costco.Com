import React, { useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import Header from "./HomeComponent/Header";
import Footer from "./HomeComponent/Footer";
import ForImageSection from "./HomeComponent/ForImageSection";
import Swipers from "./HomeComponent/Swiper";
import Products from "./HomeComponent/Products";
import ProductsCard from "./HomeComponent/ProductsCard";
import ThreeCatagorySection from "./HomeComponent/ThreeCatagorySection";
import SameDaySection from "./HomeComponent/SameDaySection";
import SameSixImage from "./HomeComponent/SameSixImage";
function Home() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://lazy-puce-horse-belt.cyclic.app/",
          {
            withCredentials: true,
            credentials: "include",
          }
        );
        console.log(response);
      } catch (error) {}
    }
    fetchData();
  }, []);
  return (
    <Box w={"100%"} bg={"#ECECEC"} overflowX={"hidden"} objectFit={"cover"}>
      <Header />
      <ForImageSection />
      <Swipers />
      <ThreeCatagorySection />
      <SameDaySection />
      <SameSixImage />
      <Footer />
    </Box>
  );
}

export default Home;
