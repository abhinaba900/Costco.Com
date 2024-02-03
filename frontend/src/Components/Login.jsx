import React from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import {
  Box,
  Text,
  Heading,
  Button,
  Input,
  Image,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Checkbox,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleClick = () => setShow(!show);
  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://good-blue-fly-cuff.cyclic.app/user/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {}
  };
  return (
    <Box>
      <Box background={"#ECECEC"} p={"2em"}>
        <Image
          w={"9.375em"}
          display={"block"}
          mx={"auto"}
          src="https://signin-ui.costco.com/ecomssoui/567/common/Images/logo-bc-us.svg"
          alt="main-logo"
        />
      </Box>
      <Box w={"40%"} mx={"auto"} my={"2.5em"} p={"1em"}>
        <Heading className="poppins-black" fontSize={"2.25em"}>
          Sign In
        </Heading>
        <Box
          border={"1px solid #ECECEC"}
          display={"flex"}
          flexDirection={"column"}
          p={"1em"}
          mt={"1em"}
          gap={"1em"}
          borderRadius={"0.5em"}
        >
          <form
            // display={"flex"}
            // flexDirection={"column"}
            // gap={"1em"}
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1em" }}
          >
            <Input
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              name="email"
            />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Password"
                onChange={handleChange}
                name="password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <IoMdEyeOff /> : <IoEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Link
              className="poppins-normal"
              style={{
                width: "fit-content",
                textDecoration: "none",
                color: "blue",
                borderBottom: "1px solid blue",
              }}
              to="/forgot-password"
            >
              Forgot Password ?
            </Link>
            <br />
            <Checkbox defaultChecked>Keep me signed in</Checkbox>
            <Text className="poppins-normal" fontSize={"0.80em"}>
              Check this box only when on a private device.
            </Text>
            {/* <Input
              color={"white"}
              bg={"#2A6293"}
              type="Submit"
              value="Sign In"
            /> */}
            <Button
              type="submit"
              value="Sign In"
              bg={"#2A6293"}
              color={"white"}
            >
              Sign In
            </Button>
          </form>
          <hr />
          <Text fontSize={"1.25em"} className="poppins-normal">
            New to Costco?
          </Text>
          <Input
            color={"#2A6293"}
            type="button"
            value="Create an Account"
            onClick={() => {
              navigate("/signup");
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
