import "./App.css";
import Home from "./Components/Home";
import AllRoutes from "./Routes/AllRoutes";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box w={"100%"} overflowX={"hidden"}>
      <AllRoutes />
    </Box>
  );
}

export default App;
