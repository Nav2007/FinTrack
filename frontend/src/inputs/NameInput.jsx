import TextField from "@mui/material/TextField";
import React from "react";
export default function Name({register,error,label="Name",placeholder="Enter your Name",name="name"}){
    return(
        <>
        <TextField 
            fullWidth
            label={label}
            placeholder={placeholder}
            name={name}
            variant='outlined'
            error={!!error}
            helperText={error?.message}
            {...register(name)}
        />
        </>
    )
}