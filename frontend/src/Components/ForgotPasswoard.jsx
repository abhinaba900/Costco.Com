import React from "react";
import axios from "axios";
import { Box, Input, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { useToast } from "@chakra-ui/react";
function ForgotPasswoard() {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();
  const navigate = useNavigate();
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
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const response = await axios.post(
              "https://lazy-puce-horse-belt.cyclic.app/user/register-email",
              {
                email,
              },
              {
                withCredentials: true,
              }
            );
            if (response.status === 200) {
              toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
              navigate("/login");
              console.log(response);
            }
          } catch (error) {
            toast({
              title: "Error. Please try again.",
              description: error.response.data.message,
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          gap: "10px",
          margin: "auto",
          padding: "1em",
          marginTop: "3em",
        }}
      >
        <h1
          style={{ textAlign: "center", fontSize: "1.5em" }}
          className="poppins-bold"
        >
          Forgot Password
        </h1>
        <Input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}

export default ForgotPasswoard;
