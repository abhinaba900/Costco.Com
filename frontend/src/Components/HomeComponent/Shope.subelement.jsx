import React from "react";
import { Box } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
function ShopeSubelement() {
  return (
    <Box>
      <Menu>
        <MenuButton as={Button}>Appliances</MenuButton>
        <MenuList ml={"120%"}>
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
