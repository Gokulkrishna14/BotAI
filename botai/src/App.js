import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import { Box, Stack } from '@mui/material';
import "./App.css";

function App() {
  return (
    <Box className="container">
      <Stack direction="row" sx={{ width: '100%', height: '100vh' }}>
        <SideBar />
        <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
