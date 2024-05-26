import { Box, Stack, Typography } from "@mui/material";
import ChatContainer from "../../components/ChatContainer/ChatContainer";
import MessageSection from "../../components/MessageSection/MessageSection";
import FeedbackModal from "../../components/FeedbackModal/FeedbackModal";
import { useState, useEffect } from "react";
import BotAISampleData from "../../SampleAIText/BotAISampledata.json";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function ChatPage() {
    const [message, setMessage] = useState("");
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState(null);

    const { setMessageHistory, messages, setMessages } = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("Currentmessages", JSON.stringify(messages));
    }, [messages]);

    const getCurrentTime = () => {
        const timestamp = new Date().getTime();
        return timestamp;
    };

    const handleSend = () => {
        const userMessage = [...messages, { sender: "user", text: message, timeStamp: getCurrentTime() }];

        setMessages(userMessage);
        setMessage('');

        const botResponse = BotAISampleData.find((response) => response.question.toLowerCase() === message.toLowerCase());
        const botResponseMessage = botResponse ? botResponse.response : "I'm sorry, I don't understand the question. As I am still in my training phase."; 

        setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, { sender: "ai", text: botResponseMessage, timeStamp: getCurrentTime() }]);
        }, 1000);
    };

    const handleSave = () => {
        const existingHistory = JSON.parse(localStorage.getItem("MessageHistory")) || [];
        const updatedMessageHistory = [...existingHistory, messages];
        setMessageHistory(updatedMessageHistory);
        localStorage.setItem("MessageHistory", JSON.stringify(updatedMessageHistory));
        setMessages([]);
        navigate("/feedback");
    };

    const handleRate = (message, rating) => {
        const updatedMessages = messages.map(msg => 
            msg === message ? { ...msg, rating: rating } : msg
        );
        setMessages(updatedMessages);
        localStorage.setItem("Currentmessages", JSON.stringify(updatedMessages));
    };

    const handleFeedback = (message) => {
        setFeedbackMessage(message);
        setShowFeedbackModal(true);
    };

    const handleFeedbackSubmit = (feedback) => {
        const updatedMessages = messages.map(msg => 
            msg === feedbackMessage ? { ...msg, feedback: feedback } : msg
        );
        setMessages(updatedMessages);
        localStorage.setItem("Currentmessages", JSON.stringify(updatedMessages));
        setShowFeedbackModal(false);
    };

    const lastAIMessageIndex = messages.map((message, index) => ({ message, index }))
        .filter(({ message }) => message.sender === 'ai')
        .pop()?.index;

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
            <Stack spacing={2} sx={{ height: '100%' }}>
                <Typography variant="h4" component="h4">Bot AI</Typography>
                <Box sx={{ flex: 1, overflow: 'auto' }}>
                    <MessageSection 
                        messages={messages} 
                        lastAIMessageIndex={lastAIMessageIndex} 
                        handleRate={handleRate}
                        handleFeedback={handleFeedback}
                    />
                </Box>
                <ChatContainer 
                    message={message}
                    setMessage={setMessage}
                    handleSend={handleSend}
                    handleSave={handleSave}
                />
            </Stack>
            <FeedbackModal 
                open={showFeedbackModal} 
                onClose={() => setShowFeedbackModal(false)} 
                onSubmit={handleFeedbackSubmit} 
            />
        </Box>
    );
}

