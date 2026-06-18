import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
export default function CategorySelect({categories,register,error}) {
    return (
        <TextField
            select
            label="Category"
            fullWidth
            {...register("category")}
            error={!!error}
            helperText={error?.message}
        >
            {categories.map((category) => (
                <MenuItem
                    key={category.value}
                    value={category.value}
                >
                    <Avatar
                        src={category.image}
                        sx={{
                            width: 24,
                            height: 24,
                            mr: 1
                        }}
                    />

                    {category.label}
                </MenuItem>
            ))}
        </TextField>
        
    );
}