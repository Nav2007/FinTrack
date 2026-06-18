import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

export default function Password({register,error,label="Password",placeholder="Enter your password",name="password",}){
    const[visibility,setVisibility]=useState(false)
    function toggleVisibility(e){
        setVisibility(!visibility)
    }
    return (
        <>
            <TextField
                fullWidth
                type={ visibility?"text":"password"}
                label={label}
                placeholder={placeholder}
                variant="outlined"
                error={!!error}
                helperText={error?.message}
                 {...register(name)}
                InputProps={{
                    startAdornment:(<InputAdornment position="start"><LockIcon/></InputAdornment>),
                    endAdornment:(<InputAdornment position="end">
                        <IconButton type="button" onClick={toggleVisibility} edge="end">{visibility?(<VisibilityOffIcon/>):(<VisibilityIcon/>)}</IconButton>
                        </InputAdornment>)
                }}
            />
        </>
    )
}