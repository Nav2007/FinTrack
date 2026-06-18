import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function SummaryCards({ summary }) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardContent>
                        <Typography color="text.secondary">
                            Total Income
                        </Typography>

                        <Typography variant="h5">
                            ₹{summary.income}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={4}>
                <Card>
                    <CardContent>
                        <Typography color="text.secondary">
                            Total Expense
                        </Typography>

                        <Typography variant="h5">
                            ₹{summary.expense}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={4}>
                <Card>
                    <CardContent>
                        <Typography color="text.secondary">
                            Net Savings
                        </Typography>

                        <Typography variant="h5">
                            ₹{summary.net}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}