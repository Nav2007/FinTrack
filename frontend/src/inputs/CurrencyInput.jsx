import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function Currency({ register, error }) {
  return (
    <TextField
      select
      fullWidth
      label="Currency"
      error={!!error}
      helperText={error?.message}
      defaultValue=""
      {...register("currency")}
    >
      <MenuItem value="">Select Currency</MenuItem>
      <MenuItem value="INR">INR (₹)</MenuItem>
      <MenuItem value="USD">USD ($)</MenuItem>
      <MenuItem value="EUR">EUR (€)</MenuItem>
      <MenuItem value="GBP">GBP (£)</MenuItem>
      <MenuItem value="JPY">JPY (¥)</MenuItem>
    </TextField>
  );
}