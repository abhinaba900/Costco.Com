import React, { useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import Header from "./HomeComponent/Header";
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
    <Box w={"100%"}  bg={"#ECECEC"} overflow={"hidden"}>
      <Header />
    </Box>
  );
}

export default Home;
