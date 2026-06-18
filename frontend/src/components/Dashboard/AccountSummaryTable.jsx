import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function AccountSummaryTable({ data }) {
    if (data.length === 0) {
    return (
        <Typography>
            No transactions yet
        </Typography>
    );
}

    return (
        <TableContainer
            component={Paper}
            sx={{ mt: 3 }}
        >
            <Typography
                variant="h6"
                sx={{ p: 2 }}
            >
                Account Summary
            </Typography>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Account</TableCell>
                        <TableCell align="right">
                            Income
                        </TableCell>

                        <TableCell align="right">
                            Expense
                        </TableCell>

                        <TableCell align="right">
                            Balance
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.account}>
                            <TableCell>
                                {row.account.toUpperCase()}
                            </TableCell>

                            <TableCell align="right">
                                ₹{row.income}
                            </TableCell>

                            <TableCell align="right">
                                ₹{row.expense}
                            </TableCell>

                            <TableCell align="right">
                                ₹{row.balance}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}