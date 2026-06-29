import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";

export default function AccountTypeSelection({

    selectedType,

    setSelectedType

}) {

    return (

        <Box
            mt={2}
            display="flex"
            flexDirection="column"
            gap={3}
        >

            <Typography
                variant="body1"
            >
                Choose the type of account you want to create.
            </Typography>

            <Card
                sx={{
                    border:
                        selectedType === "general"
                            ? "2px solid #1976d2"
                            : "1px solid #ddd"
                }}
            >

                <CardActionArea
                    onClick={() =>
                        setSelectedType("general")
                    }
                >

                    <Box
                        p={3}
                        display="flex"
                        alignItems="center"
                        gap={2}
                    >

                        <AccountBalanceWalletIcon
                            fontSize="large"
                        />

                        <Box>

                            <Typography
                                variant="h6"
                            >
                                General Account
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Cash, Wallet, Bank Accounts
                            </Typography>

                        </Box>

                    </Box>

                </CardActionArea>

            </Card>

            <Card
                sx={{
                    border:
                        selectedType === "credit"
                            ? "2px solid #1976d2"
                            : "1px solid #ddd"
                }}
            >

                <CardActionArea
                    onClick={() =>
                        setSelectedType("credit")
                    }
                >

                    <Box
                        p={3}
                        display="flex"
                        alignItems="center"
                        gap={2}
                    >

                        <CreditCardIcon
                            fontSize="large"
                        />

                        <Box>

                            <Typography
                                variant="h6"
                            >
                                Credit Account
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Credit Cards & Credit Lines
                            </Typography>

                        </Box>

                    </Box>

                </CardActionArea>

            </Card>

        </Box>

    );

}