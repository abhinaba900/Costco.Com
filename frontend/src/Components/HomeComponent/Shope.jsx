import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Box, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import ShopeSubelement from "./Shope.subelement";
function Shope() {
  const [isGroceryOpen, setIsGroceryOpen] = React.useState(false);
  const closeTimeoutId = React.useRef();

  const openGrocery = () => {
    clearTimeout(closeTimeoutId.current); // Clear any pending timeout to close the menu
    setIsGroceryOpen(true);
  };

  const closeGrocery = () => {
    closeTimeoutId.current = setTimeout(() => {
      setIsGroceryOpen(false);
    }, 500);
  };
  return (
    <Box>
      <Menu isOpen={isGroceryOpen}>
        <MenuButton
          rightIcon={<GiHamburgerMenu />}
          mx={0}
          color={"white"}
          background="none"
          _hover={{ background: "none", textDecoration: "underline" }}
          _focus={{ outline: "none" }}
          onMouseEnter={() => openGrocery()} // Open menu on hover
          onMouseLeave={() => closeGrocery()}
        >
          <Text
            display={"flex"}
            alignItems={"center"}
            mr={"1em"}
            fontWeight={"normal"}
            justifyContent={"center"}
            ml={"1em"}
            fontSize={"1.2em"}
          >
            <GiHamburgerMenu /> Shop
          </Text>
        </MenuButton>
        <MenuList
          onMouseEnter={() => openGrocery()} // Keep menu open when hovering over the list
          onMouseLeave={() => closeGrocery()}
        >
          <MenuItem fontStyle={"bold"} _hover={{ fontWeight: "bold" }}>
            <ShopeSubelement />
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Baby
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Beauty
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Clothing, Luggage & Handbags
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Computers
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Costco Direct
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Costco Next
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Electronics
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Floral & Gift Baskets
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Furniture
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Gift Cards & Tickets
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Gourmet Foods
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Grocery, Household Essentials & Pet
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Health & Personal Care
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Holiday & Seasonal
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Home & Installation Services
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Home & Kitchen
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Health & Personal Care
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Home Improvement
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Jewelry, Watches & Sunglasses
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Mattresses
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Office Products
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Patio, Lawn & Garden
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Special Events
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Sports & Fitness
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Tires & Auto
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            Toys & Books
          </MenuItem>
          <MenuItem _hover={{ fontWeight: "bold" }} fontStyle={"bold"}>
            View More Categories
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default Shope;
