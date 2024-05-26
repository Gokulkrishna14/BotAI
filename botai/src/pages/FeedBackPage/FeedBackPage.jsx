import { Box , Stack, Typography } from "@mui/material";
import HistoryCard from "../../components/HistoryCard/HistoryCard";
import { useOutletContext } from "react-router-dom";

export default function FeedBackPage() {
    const { messageHistory } = useOutletContext();

    return (
        <Box
            width="100%"
            height="100vh"
            padding="10px"
            sx={{
                background: 'linear-gradient(0deg, rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))',
                overflow: 'hidden',
            }}
        >
            <Stack height="100%">
                <Box flexShrink={0}></Box>
                <Typography textAlign="center" mt="20px">Conversation History</Typography>
                <Box flexGrow={1} overflow="auto">
                    {messageHistory.map((messageCard, index) => 
                        <HistoryCard messageCard={messageCard} key={index} />
                    )}
                </Box>
            </Stack>
        </Box>
    );
}
