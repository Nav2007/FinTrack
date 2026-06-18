import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email'
export default function Email({register,error}){
    return (
        <TextField
            fullWidth
            label="Email"
            placeholder='Enter your email'
            variant='outlined'
            error={!!error}
            helperText={error?.message}
            {...register("email")}
            InputProps={{startAdornment:(<InputAdornment position='start'><EmailIcon/></InputAdornment>)}}
        />
    )
}