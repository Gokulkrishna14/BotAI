import { Stack, TextField} from "@mui/material";
import ButtonCompo from "../Button/ButtonCompo";

export default function ChatContainer(){
    return(
        <Stack direction="row" spacing={2} alignItems="center" >
                    <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Ask me anything.."
                    sx= {{
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        borderRadius: "5px",
                    }}
                    />
                    
                    <ButtonCompo>Ask</ButtonCompo>
                    <ButtonCompo>Send</ButtonCompo>

        </Stack>
    );
};