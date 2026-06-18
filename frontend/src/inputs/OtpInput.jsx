import React from "react";
import OtpInput from"react-otp-input"
export default function Otp({otp,setOtp,onSubmit,email}){
    return (
        <>
            <p>Enter OTP sent to {email} to proceed</p>
            <OtpInput 
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>-</span>}
                inputType="tel"
                renderInput={(inputProps) => (
                <input
                    {...inputProps}
                    style={{
                    width:"50px",
                    height:"50px",
                    textAlign:"center",
                    fontSize:"24px",
                    }}
                />
                )}
            />
            <button type="button" onClick={onSubmit}>Verify OTP</button>
        </>
    )
}