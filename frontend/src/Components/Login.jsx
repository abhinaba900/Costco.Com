import React, { useEffect } from "react";
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
import { AuthContext } from "./AuthContextProvider";
import { Navigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const toast = useToast();
  const handleClick = () => setShow(!show);
  const [loading, setLoading] = React.useState(false);
  const { login, setLogin } = React.useContext(AuthContext);
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
      setLoading(true);
      const response = await axios.post(
        "https://costcocombackend-production.up.railway.app/user/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setLoading(false);
        localStorage.setItem("login", true);
        setLogin(true);
        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/");
      } else {
        setLoading(false);
        toast({
          title: "Account not found.",
          description: `${response.data.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast({
        title: "Account not found.",
        description: `${error.response.data.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (login) {
    return <Navigate to="/" />;
  }
  return (
    <Box fontFamily={"poppins"}>
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
        <Heading className="poppins-black" fontSize={"2.25em"} mb={"2em"}>
          Sign In
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
                p={"1.8em"}
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                value={email}
                name="email"
                required
              />
              <InputGroup size="md">
                <Input
                  overflow={"hidden"}
                  p={"1.8em"}
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={password}
                  required
                />
                <InputRightElement width="4.5rem">
                  <Button
                    mt={"1.1em"}
                    objectFit={"contain"}
                    p={"1.6em"}
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                  >
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
                p={"2em"}
              >
                Sign In
              </Button>
            </form>
            <hr />
            <Text fontSize={"1.25em"} className="poppins-normal">
              New to Costco?
            </Text>

            <Button
              p={"2em"}
              cursor={"pointer"}
              color={"#2A6293"}
              onClick={() => navigate("/signup")}
            >
              Create an Account
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Login;
