import { useState } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import AddAccountDialog from "../../components/Accounts/AddAccountDialog";

export default function Accounts() {

    const [open, setOpen] = useState(false);

    return (

        <Box p={4}>

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={4}
            >

                <Typography
                    variant="h4"
                    fontWeight={700}
                >
                    Accounts
                </Typography>

                <Button
                    variant="contained"
                    onClick={() => setOpen(true)}
                >
                    Add Account
                </Button>

            </Box>

            <AddAccountDialog
                open={open}
                onClose={() => setOpen(false)}
            />

        </Box>

    );

}