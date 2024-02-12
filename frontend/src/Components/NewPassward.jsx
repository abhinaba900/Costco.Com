import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function NewPassward() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (password !== password1) {
        toast({
          title: "Error",
          description: "Password not Matched",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }

      const response = await axios.patch(
        "https://costcocombackend-production.up.railway.app/user/forgot/password",
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        toast({
          title: "Email verified",
          description: "Password changed successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/login");
      }
      else{
         toast({
           title: "Account not found.",
           description: `${response.data.message}`,
           status: "error",
           duration: 5000,
           isClosable: true,
         });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Box w={{ base: "100%", md: "50%" }} mx={"auto"} my={"8em"}>
      <form onSubmit={handleClick}>
        <Heading>Change Your Password</Heading>
        <label>Enter Your Email</label>
        <Input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <Input
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Re-enter your Password</label>
        <Input
          type="password"
          placeholder="re-enter your password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}

export default NewPassward;
