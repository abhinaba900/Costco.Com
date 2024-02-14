import React, { useEffect } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
import styles from "./LogoutButton.module.css";
import { AuthContext } from "../../Components/AuthContextProvider";
function UserMenu() {
  const { login, setLogin } = React.useContext(AuthContext);
  

  const handaleLogout = async () => {
    try {
      const response = await axios.get(
        "https://costcocombackend-production.up.railway.app/user/logout",
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        localStorage.setItem("login", false);
        console.log("logout successful");
        setLogin(false);
      } else {
        console.log("logout failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<FaUserAlt />}
        variant="outline"
        colorScheme={"pink"}
      >
        Profile
      </MenuButton>
      <MenuList p="4">
        <MenuItem minH="48px" display="flex" alignItems="center">
          <FaUserAlt mx="auto" />
        </MenuItem>
        <MenuItem minH="40px">
          <button className={styles.Btn} onClick={handaleLogout}>
            <div className={styles.sign}>
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
            </div>
            <div className={styles.text}>Logout</div>
          </button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserMenu;
