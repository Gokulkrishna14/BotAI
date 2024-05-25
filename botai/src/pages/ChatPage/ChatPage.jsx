import { Box, Stack, Typography } from "@mui/material";
import ChatContainer from "../../components/ChatContainer/ChatContainer";
import MessageSection from "../../components/MessageSection/MessageSection";

export default function ChatPage() {
  return (
    <Box
      width="100%"
      height="100%"
      padding="10px"
      sx={{
        background: 'linear-gradient(0deg, rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))',
        overflow: 'auto',
      }}
    >
      <Stack spacing={2} sx={{ height: '100%' }}>
        <Typography variant="h4" component="h4">Bot AI</Typography>
        <MessageSection />
        <ChatContainer />
      </Stack>
    </Box>
  );
}
