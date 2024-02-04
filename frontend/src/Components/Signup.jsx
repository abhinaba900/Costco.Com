import React from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useToast } from "@chakra-ui/react";
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
import { Checkbox } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

function Signup() {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const toast = useToast();
  const handleClick = () => {
    setShow(!show);
  };
  const handleClick1 = () => {
    setShow1(!show1);
  };
  const [loading, setLoading] = React.useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://lazy-puce-horse-belt.cyclic.app/user/register",
        {
          name,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(password, confirmPassword);
      if (password === confirmPassword && response.status === 201) {
        setLoading(false);
        toast({
          title: "Success",
          description: "Account created successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/login");
      }
      console.log(response);
    } catch (error) {
      setLoading(false);
      toast({
        title: "Error",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "password2") {
      setConfirmPassword(e.target.value);
    }
  };

  if (document.cookie) {
    console.log("cookie", document.cookie);
    return navigate("/");
  }

  return (
    <Box>
      <Box background={"#ECECEC"} p={"2em"}>
        <Image
          onClick={() => navigate("/")}
          cursor={"pointer"}
          w={"9.375em"}
          display={"block"}
          mx={"auto"}
          src="https://signin-ui.costco.com/ecomssoui/567/common/Images/logo-bc-us.svg"
          alt="main-logo"
        />
      </Box>
      <Box
        w={{ base: "90%", md: "50%", lg: "35%" }}
        mx={"auto"}
        my={"2.5em"}
        p={"1em"}
      >
        <Heading className="poppins-black" fontSize={"2.25em"}>
          Create Account
        </Heading>
        {loading ? (
          <Loading />
        ) : (
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
                type="text"
                placeholder="Full Name"
                onChange={handleChange}
                name="name"
                value={name}
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                value={email}
                name="email"
                required
              />
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  onChange={handleChange}
                  value={password}
                  name="password"
                  required
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? <IoMdEyeOff /> : <IoEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show1 ? "text" : "password"}
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={confirmPassword}
                  name="password2"
                  required
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick1}>
                    {show1 ? <IoMdEyeOff /> : <IoEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <br />
              <Checkbox defaultChecked>
                Yes, I would like to receive emails about special promotions and
                new product information from Costco. Costco will not rent or
                sell your email address.
              </Checkbox>
              <Text className="poppins-normal" fontSize={"1em"}>
                By creating an account you agree to Costco.com terms and
                conditions of use.
              </Text>
              {/* <Input
              color={"white"}
              bg={"#2A6293"}
              type="Submit"
              value="Sign In"
            /> */}
              <Button
                type="submit"
                value="Create Account"
                bg={"#2A6293"}
                color={"white"}
              >
                Create Account
              </Button>
            </form>
            <hr />
            <Text fontSize={"1.25em"} className="poppins-normal">
              Already have an account?{" "}
              <Link
                style={{
                  color: "#2A6293",
                  fontSize: "1em",
                  borderBottom: "1px solid #2A6293",
                }}
                to="/login"
              >
                Log In
              </Link>
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Signup;
