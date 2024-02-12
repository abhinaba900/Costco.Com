import React, { useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import Header from "./HomeComponent/Header";
import Footer from "./HomeComponent/Footer";
import ForImageSection from "./HomeComponent/ForImageSection";
import Swipers from "./HomeComponent/Swiper";
import ThreeCatagorySection from "./HomeComponent/ThreeCatagorySection";
import SameDaySection from "./HomeComponent/SameDaySection";
import SameSixImage from "./HomeComponent/SameSixImage";
import { AuthContext } from "../Components/AuthContextProvider";
function Home() {
  const { login, setLogin } = React.useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://costcocombackend-production.up.railway.app/",
          {
            withCredentials: true,
          }
        );

        console.log(response);
      } catch (error) {
        console.log(error);
        setLogin(false);
      }
    }
    fetchData();
  }, [login]);

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
