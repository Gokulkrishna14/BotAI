import { Stack, TextField} from "@mui/material";
import ButtonCompo from "../Button/ButtonCompo";

export default function ChatContainer({message, setMessage, handleSend, handleSave}){
    return(
        <Stack direction="row" spacing={2} alignItems="center" >
                    <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Ask me anything.."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    sx= {{
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        borderRadius: "5px",
                    }}
                    />
                    
                    <ButtonCompo onClick={handleSend}>Ask</ButtonCompo>
                    <ButtonCompo onClick={handleSave}>Save</ButtonCompo>

        </Stack>
    );
};