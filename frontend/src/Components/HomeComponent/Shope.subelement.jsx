import React from "react";
import { Box } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
function ShopeSubelement() {
  const closeTimeoutId = React.useRef();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const openMenu = () => {
    clearTimeout(closeTimeoutId.current); // Clear any pending timeout to close the menu
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    closeTimeoutId.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 500);
  };
  return (
    <Box>
      <Menu isOpen={isMenuOpen}>
        <MenuButton
          _hover={{ fontWeight: "bold" }}
          onMouseEnter={() => openMenu()} // Open menu on hover
          onMouseLeave={() => closeMenu()}
        >
          Appliances
        </MenuButton>
        <MenuList
          ml={"120%"}
          onMouseEnter={() => openMenu()} // Open menu on hover
          onMouseLeave={() => closeMenu()}
        >
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default ShopeSubelement;
