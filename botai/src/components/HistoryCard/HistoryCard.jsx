import { Box, Stack, Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import userPic from "../../assests/userCard.png"
import aiPic from "../../assests/AICard.png";
import { format, isToday, isYesterday } from 'date-fns';

export default function HistoryCard({ messageCard }) {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        if (isToday(date)) return "Today";
        if (isYesterday(date)) return "Yesterday";
        return format(date, "MMMM dd, yyyy");
    };

    return (
        <Box width="100%" display="flex" flexDirection="column" mb={2}>
            <Typography variant="h6" component="h6" mt={2} mb={2}>
                {formatDate(messageCard[0].timeStamp)}
            </Typography>
            <Box sx={{
                background: 'linear-gradient(0deg, rgba(191, 172, 226, 1), rgba(215, 199, 244, 1))',
                borderRadius: "15px",
                padding: "5px",
            }}>
                {messageCard.map((message, index) => {
                    const profilePic = message.sender === "user" ? userPic : aiPic;
                    const profileName = message.sender === "user" ? "You" : "Soul AI";

                    return (
                        <Box key={index} mb={2}>
                            <Stack
                                direction="row"
                                width="100%"
                                height="auto"
                                alignItems="center"
                                paddingLeft="10px"
                                paddingRight="10px"
                            >
                                <img src={profilePic} width={"65px"} height={"65px"} style={{ borderRadius: "35px" }} alt={`${message.sender} avatar`} />
                                <Stack
                                    direction="column"
                                    spacing={1}
                                    paddingLeft="10px"
                                    width="100%"
                                >
                                    <Typography fontWeight="bold">{profileName}</Typography>
                                    <Typography variant="body2">{message.text}</Typography>
                                    {message.sender !== "user" && message.rating && (
                                        <Box height="auto" paddingTop="10px">
                                            <Typography variant="body2">You have rated this conversation</Typography>
                                            <Rating
                                                name="response"
                                                value={message.rating}
                                                readOnly
                                            />
                                        </Box>
                                    )}
                                    {message.sender !== "user" && message.feedback && (
                                        <Box height="auto" paddingTop="10px">
                                            <Typography variant="body1">Your Feedback</Typography>
                                            <Typography variant="body2">{message.feedback}</Typography>
                                        </Box>
                                    )}
                                </Stack>
                            </Stack>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}
