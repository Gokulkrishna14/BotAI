import userPic from "../../assests/userCard.png";
import aiPic from "../../assests/AICard.png";
import { Box, Stack, Typography } from "@mui/material";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import Rating from '@mui/material/Rating';
import { useState } from "react";
import {format} from "date-fns";

export default function ChatCard({ message, lastAIMessageIndex, handleRate, handleFeedback }) {
    const { sender, text, timeStamp } = message;
    const profilePic = sender === "user" ? userPic : aiPic;
    const profileName = sender === "user" ? "You" : "Soul AI";
    const [showRating, setShowRating] = useState(false);
    const [rating, setRating] = useState(0);
    const formattedTime = format(new Date(timeStamp), "hh:mm a");

    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
        handleRate(message, newValue);
        console.log(`Rating for the response: ${newValue}`);
        setShowRating((prev) => !prev);
    };

    return (
        <Box>
            <Stack
                direction="row"
                width="100%"
                height="auto"
                backgroundColor="rgba(215, 199, 244, 0.13)"
                display="flex"
                alignItems="center"
                paddingLeft="10px"
                paddingRight="10px"
                borderRadius="15px"
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                marginBottom="10px"
                justifyContent="flex-end"
            >
                <img src={profilePic} width={"65px"} height={"65px"} style={{ borderRadius: "35px" }} alt={`${sender} avatar`} />

                <Stack
                    direction="column"
                    spacing={1}
                    paddingLeft="10px"
                    width="100%"
                >
                    <Typography fontWeight="bold">{profileName}</Typography>
                    <Typography variant="body2">{text}</Typography>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        width="100%"
                    >
                        <Typography variant="caption" color="rgba(0, 0, 0, 0.62)">{formattedTime}</Typography>
                        {sender !== "user" && lastAIMessageIndex  && (
                            <Box display="flex" alignItems="center" justifyContent="space-between" paddingLeft="10px">
                                {!message.rating && (
                                    <ThumbUpAltOutlinedIcon
                                        onClick={() => setShowRating((prev) => !prev)}
                                        sx={{ width: "20px", height: "20px", margin: "0px 10px", cursor: "pointer" }}
                                    />
                                )}
                                {!message.feedback && (
                                    <ThumbDownOutlinedIcon
                                        onClick={() => handleFeedback()}
                                        sx={{ width: "20px", height: "20px", margin: "0px 10px", cursor: "pointer" }}
                                    />
                                )}
                            </Box>
                        )}
                    </Stack>
                    {sender !== "user" && message.rating && (
                        <Box height="auto" paddingTop="10px">
                            <Typography variant="body2">You have rated this conversation</Typography>
                            <Rating
                                name="response"
                                value={message.rating}
                                readOnly
                            />
                        </Box>
                    )}
                    {sender !== "user" && showRating && (
                        <Box height="auto" paddingTop="10px">
                            <Typography variant="body2">Rate this response</Typography>
                            <Rating
                                name="response-rating"
                                value={rating}
                                onChange={handleRatingChange}
                                onChangeActive={(event, newHover) => {}}
                            />
                        </Box>
                    )}
                    {sender !== "user" && message.feedback && (
                        <Box height="auto" paddingTop="10px">
                            <Typography variant="body1">Your FeedBack</Typography>
                            <Typography variant="body2">{message.feedback}</Typography>
                        </Box>
                    )}
                </Stack>
            </Stack>
        </Box>
    );
}
