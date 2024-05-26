import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import { Box, Stack } from '@mui/material';
import "./App.css";
import { useState } from "react";

function App() {

  const getInitialMessages = () => {
    const currentMessageHistory = JSON.parse(localStorage.getItem("Currentmessages"));
    return currentMessageHistory ? currentMessageHistory : [];
  };

  const getInitialHistoryMessages = () => {
    const currentMessageHistory = JSON.parse(localStorage.getItem("MessageHistory"));
    return currentMessageHistory ? currentMessageHistory : [];
  };

  const [messageHistory, setMessageHistory] = useState(getInitialHistoryMessages);
  const[messages, setMessages] = useState(getInitialMessages);
  return (
    <Box className="container">
      <Stack direction="row" sx={{ width: '100%', height: '100vh' }}>
        <SideBar />
        <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
          <Outlet context={{ messageHistory, setMessageHistory, messages, setMessages }} />
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
