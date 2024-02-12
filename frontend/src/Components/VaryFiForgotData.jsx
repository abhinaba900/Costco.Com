import React from "react";
import axios from "axios";
import { Button, Heading, Input, useToast } from "@chakra-ui/react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
function VaryFiForgotData() {
  const [token, setToken] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(token, userId);
      const response = await axios.post(
        "https://costcocombackend-production.up.railway.app/user/verify-email",
        {
          token,
          userId,
        }
      );

      if (response.status === 200) {
        toast({
          title: "Email verified",
          description: "Email verified successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/new-password");
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <form onSubmit={handleSubmit} className="token-validation">
      <Heading>Verify-token</Heading>
      <label htmlFor="token">Token</label>
      <Input
        type="text"
        name="token"
        placeholder="token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <label htmlFor="userId">userId</label>
      <Input
        type="text"
        name="userId"
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default VaryFiForgotData;
