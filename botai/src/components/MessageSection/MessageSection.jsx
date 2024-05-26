import { Box } from "@mui/material";
import ChatCard from "../ChatCard/ChatCard";
import styles from "./MessageSection.module.css";

export default function MessageSection({ messages, lastAIMessageIndex, handleRate, handleFeedback }) {
    return (
        <Box
            component="section"
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            overflowY="auto"
            className={styles.messageBox}
        >
            {messages.map((message, index) => (
                <ChatCard
                    message={message}
                    key={index}
                    lastAIMessageIndex={index === lastAIMessageIndex}
                    handleRate={handleRate}
                    handleFeedback={() => handleFeedback(message)}
                />
            ))}
        </Box>
    );
}
