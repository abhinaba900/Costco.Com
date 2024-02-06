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
  IconButton,
} from "@chakra-ui/react";
import Shope from "./Shope";
import axios from "axios";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isGroceryOpen, setIsGroceryOpen] = React.useState(false);
  const bg = useColorModeValue("#EEEEEE", "gray.800");
  const color = useColorModeValue("#0060A9", "#0060A9");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const closeTimeoutId = React.useRef();
  const [mobileView, setMobileView] = React.useState(false);
  const [Search, setSearch] = React.useState("");

  React.useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(Search);
  const handleSearch = () => {};

  const openMenu = () => {
    clearTimeout(closeTimeoutId.current); // Clear any pending timeout to close the menu
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    closeTimeoutId.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 500);
  };

  const openGrocery = () => {
    clearTimeout(closeTimeoutId.current); // Clear any pending timeout to close the menu
    setIsGroceryOpen(true);
  };

  const closeGrocery = () => {
    closeTimeoutId.current = setTimeout(() => {
      setIsGroceryOpen(false);
    }, 500);
  };

  function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      // Set debouncedValue to value (passed in) after the specified delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cleanup function to cancel the timeout if value or delay changes
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]); // Only re-call effect if value or delay changes

    return debouncedValue;
  }

  const debouncedSearchTerm = useDebounce(Search, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Call your API or perform the action with the debounced term
      console.log("Performing API call with:", debouncedSearchTerm);
      async function fetchData() {
        try {
          const response = await axios.get(
            "https://lazy-puce-horse-belt.cyclic.app/products?search=" +
              debouncedSearchTerm
          );
          console.log(response.data.length);
          if (response.data.length === 0) {
            navigate("/error");
            
          }
          else{
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
    <Box w={"100%"} bg={bg} px={"1em"} overflowX={"hidden"}>
      <Flex
        py={2}
        borderColor={borderColor}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={{ base: "center", md: "flex-end" }}
      >
        <Text mx={"1em"} color={color}>
          Costco Next
        </Text>
        <Text mx={"1em"} color={color}>
          While Supplies Last
        </Text>
        <Text mx={"1em"} color={color}>
          Online-Only
        </Text>
        <Text mx={"1em"} color={color}>
          Treasure Hunt
        </Text>
        <Text mx={"1em"} color={color}>
          What's New
        </Text>
        <Text mx={"1em"} color={color}>
          New Lower Prices
        </Text>
        <Text mx={"1em"} color={color}>
          Get Email Offers
        </Text>
        <Text mx={"1em"} color={color}>
          Customer Service
        </Text>
        {/* Chakra UI Menu for Dropdown */}
        <Menu isOpen={isMenuOpen}>
          <MenuButton
            rightIcon={<ChevronDownIcon />}
            onClick={() => (isMenuOpen ? closeMenu() : openMenu())}
            mx={0}
            color={color}
            background="none"
            _hover={{ background: "none", textDecoration: "underline" }}
            _focus={{ outline: "none" }}
            onMouseEnter={() => openMenu()} // Open menu on hover
            onMouseLeave={() => closeMenu()} // Close menu on mouse leave
          >
            Us <ChevronDownIcon />
          </MenuButton>
          <MenuList
            onMouseEnter={() => openMenu()} // Keep menu open when hovering over the list
            onMouseLeave={() => closeMenu()}
          >
            <MenuItem fontStyle={"bold"}>Select country/region:</MenuItem>
            <MenuItem fontStyle={"bold"}>United States</MenuItem>
            <MenuItem fontStyle={"bold"}>Canada</MenuItem>
            <MenuItem fontStyle={"bold"}>United Kingdom</MenuItem>
            <MenuItem fontStyle={"bold"}>Mexico</MenuItem>
            <MenuItem fontStyle={"bold"}>South Korea</MenuItem>
            <MenuItem fontStyle={"bold"}>Taiwan</MenuItem>
            <MenuItem fontStyle={"bold"}>Japan</MenuItem>
            <MenuItem fontStyle={"bold"}>Australia</MenuItem>
            <MenuItem fontStyle={"bold"}>Iceland</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
        gap={6}
        alignItems="center"
        w="100%"
        h={"100%"}
        p={"1em"}
        borderBottom={"1px solid #E5E5E5"}
      >
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

        <GridItem colSpan={1}>
          <InputGroup>
            <InputRightElement
              children={<SearchIcon cursor={"pointer"} color="gray.300" />}
            />
            <Input
              type="tel"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </GridItem>

        <GridItem colSpan={1}>
          <Flex justifyContent="flex-end" alignItems="center">
            <Text
              cursor={"pointer"}
              _hover={{ borderBottom: "2px solid #0060A9" }}
              color={"#0060A9"}
              onClick={() => navigate("/login")}
              p={"0"}
              marginBlockStart={0}
              marginBlockEnd={0}
            >
              Sign In / Register
            </Text>
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
      <Flex
        py={2}
        borderColor={borderColor}
        bg={"#0073A6"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        alignItems={{ base: "center", md: "flex-start" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Shope />
        <Menu isOpen={isGroceryOpen}>
          <MenuButton
            rightIcon={<ChevronDownIcon />}
            mx={0}
            color={"white"}
            background="none"
            _hover={{ background: "none", textDecoration: "underline" }}
            _focus={{ outline: "none" }}
            onMouseEnter={() => openGrocery()} // Open menu on hover
            onMouseLeave={() => closeGrocery()} // Close menu on mouse leave
          >
            Grocery <ChevronDownIcon />
          </MenuButton>
          <MenuList
            onMouseEnter={() => openGrocery()} // Keep menu open when hovering over the list
            onMouseLeave={() => closeGrocery()}
          >
            <MenuItem fontStyle={"bold"}>Grocery & Household</MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Gift Baskets
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Organic
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Kirkland Signature Grocery
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Gourmet Foods
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Meat
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Poultry
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Seafood
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Deli
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Cheese & Dairy
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Bakery & Desserts
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Snacks
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Candy
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Pantry & Dry Goods
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Breakfast
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Beverages & Water
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Coffee & Sweeteners
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Health & Personal Care
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Paper & Plastic Products
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Laundry Detergent & Supplies
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Cleaning Supplies
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Pet Supplies
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Floral
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Household
            </MenuItem>
            <MenuItem color={"#005DAB"} fontStyle={"bold"}>
              Emergency Kits & Supplies
            </MenuItem>
          </MenuList>
        </Menu>
        <Text mx={"1em"} color={"white"}>
          Same-Day
        </Text>
        <Text mx={"1em"} color={"white"}>
          Deals
        </Text>
        <Text mx={"1em"} color={"white"}>
          Business Delivery
        </Text>
        <Text mx={"1em"} color={"white"}>
          Optical
        </Text>
        <Text mx={"1em"} color={"white"}>
          Pharmacy
        </Text>
        <Text mx={"1em"} color={"white"}>
          Services
        </Text>

        <Text mx={"1em"} color={"white"}>
          Photo
        </Text>
        <Text mx={"1em"} color={"white"}>
          Travel
        </Text>
        <Text mx={"1em"} color={"white"}>
          Membership
        </Text>
        <Text mx={"1em"} color={"white"}>
          Locations
        </Text>
      </Flex>
    </Box>
  );
}

export default Header;