import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import Shope from "./Shope";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";
import { AuthContext } from "../AuthContextProvider";

function Header() {
  const navigate = useNavigate();
  const { login, setLogin } = React.useContext(AuthContext);
  const [logined, setLogined] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGroceryOpen, setIsGroceryOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [search, setSearch] = useState("");

  const bg = useColorModeValue("#EEEEEE", "gray.800");
  const color = useColorModeValue("#0060A9", "#0060A9");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const closeTimeoutId = useRef();

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(
          "https://costcocombackend-production.up.railway.app/",
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          localStorage.setItem("loggedInUser", true);
          const data = localStorage.getItem("loggedInUser");
          console.log(response.data);
          setLogin(true);
          setLogined(data);
        } else {
          localStorage.setItem("loggedInUser", false);
          setLogin(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [login]);

  const handleSearch = () => {};

  const openMenu = () => {
    clearTimeout(closeTimeoutId.current);
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    closeTimeoutId.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 500);
  };

  const openGrocery = () => {
    clearTimeout(closeTimeoutId.current);
    setIsGroceryOpen(true);
  };

  const closeGrocery = () => {
    closeTimeoutId.current = setTimeout(() => {
      setIsGroceryOpen(false);
    }, 500);
  };

  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      async function fetchData() {
        try {
          const response = await axios.get(
            "https://costcocombackend-production.up.railway.app/products?search=" +
              debouncedSearchTerm
          );
          if (response.data.length === 0) {
            navigate("/error");
          } else {
            navigate("/products");
          }
        } catch (error) {
          navigate("/error");
        }
      }
      fetchData();
    }
  }, [debouncedSearchTerm]);

  return (
    <Box
      w={"100%"}
      bg={bg}
      px={"1em"}
      overflowX={"hidden"}
      fontFamily={"poppins"}
    >
      {/* Header Top */}
      <Flex
        py={2}
        borderColor={borderColor}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={{ base: "center", md: "flex-end" }}
      >
        {/* Header Top Content */}
      </Flex>

      {/* Header Middle */}
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
        gap={6}
        alignItems="center"
        w="100%"
        h={"100%"}
        p={"1em"}
        borderBottom={"1px solid #E5E5E5"}
      >
        {/* Logo */}
        <GridItem colSpan={1}>
          <Box>
            <Image
              w={"12.5em"}
              objectFit="contain"
              src="https://www.costco.com/wcsstore/CostcoGLOBALSAS/images/Costco_Logo-1.png"
              alt="Costco Logo"
            />
          </Box>
        </GridItem>

        {/* Search Input */}
        <GridItem colSpan={1}>
          <InputGroup>
            <InputRightElement cursor="pointer" color="gray.300">
              <SearchIcon />
            </InputRightElement>
            <Input
              p="1.5em"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </GridItem>

        {/* User Actions */}
        <GridItem colSpan={1}>
          <Flex justifyContent="flex-end" alignItems="center">
            {logined ? (
              <UserMenu />
            ) : (
              <Text
                cursor={"pointer"}
                _hover={{ borderBottom: "2px solid #0060A9" }}
                color={"#0060A9"}
                onClick={() => navigate("/login")}
                p={"0"}
                marginBlockStart={0}
                marginBlockEnd={0}
                fontWeight={"semibold"}
              >
                Sign In / Register
              </Text>
            )}
            <Button
              p={"1.2em"}
              variant={"solid"}
              colorScheme="none"
              color={"#0060A9"}
              background={"none"}
              _hover={{ borderBottom: "2px solid #0060A9" }}
              ml={"1em"}
            >
              Orders & Returns
            </Button>
            <Button
              p={"1.2em"}
              variant={"solid"}
              colorScheme="none"
              color={"#0060A9"}
              background={"none"}
              _hover={{ borderBottom: "2px solid #0060A9" }}
              ml={"1em"}
            >
              <FaShoppingCart /> Cart
            </Button>
          </Flex>
        </GridItem>
      </Grid>

      {/* Header Bottom */}
      <Flex
        py={2}
        borderColor={borderColor}
        bg={"#0073A6"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        alignItems={{ base: "center", md: "flex-start" }}
        textAlign={{ base: "center", md: "left" }}
      >
        {/* Menu Items */}
      </Flex>
    </Box>
  );
}

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default Header;
