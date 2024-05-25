import {Button } from "@mui/material";

export default function ButtonCompo({children}){

    return(
        <Button
        sx={{
            height: '56px',
            padding: '0 16px',
            backgroundColor:"rgba(215, 199, 244, 1)",
            color: "rgba(0, 0, 0, 1)"
            }}
            >{children}</Button>
    )
};