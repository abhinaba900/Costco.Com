import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
function UserMenu() {
  const handaleLogout = async () => {
    try {
      let response = await axios.get(
        "https://costcocombackend-production.up.railway.app/user/logout",
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        localStorage.setItem("loggedInUser", false);
        
      } else {
        throw new Error("Failed to logout");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Menu>
      <MenuButton as={Button}>
        <FaUserAlt />
      </MenuButton>
      <MenuList p="4">
        <MenuItem minH="48px" display="flex" alignItems="center">
          <FaUserAlt mx="auto" />
        </MenuItem>
        <MenuItem minH="40px">
          <Button
            onClick={() => {
              handaleLogout();
            }}
          >
            Logout
          </Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserMenu;
