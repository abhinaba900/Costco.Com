import React from "react";
import axios from "axios";
function VaryFiForgotData() {
  const [data, setData] = React.useState({
    token: "",
    userId: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://costcocombackend-production.up.railway.app/user/verify-email",
        {
         
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="token"
        placeholder="token"
        value={data.token}
        onChange={(e) => setData({ [e.target.name]: e.target.value })}
      />
      <input
        type="text"
        name="userId"
        placeholder="userId"
        value={data.userId}
        onChange={(e) => setData({ [e.target.name]: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default VaryFiForgotData;
