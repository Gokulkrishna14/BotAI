import { Box, Typography, TextField, Button, Modal } from "@mui/material";
import { useState } from "react";

export default function FeedbackModal({ open, onClose, onSubmit }) {
    const [feedback, setFeedback] = useState("");

    const handleSubmit = () => {
        onSubmit(feedback);
        setFeedback("");
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    minWidth: 300,
                    maxWidth: 600,
                }}
            >
                <Typography variant="h6" component="h2" gutterBottom>
                    Provide Feedback
                </Typography>
                <TextField
                    id="feedback-text"
                    label="Your Feedback"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <Box textAlign="right">
                    <Button variant="outlined" onClick={onClose} sx={{ mr: 1 }}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleSubmit} sx={{ ml: 1 }}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
