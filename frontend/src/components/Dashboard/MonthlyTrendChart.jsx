import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer} from "recharts";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function MonthlyTrendChart({ data }) {

    if (data.length === 0) {
        return (
            <Typography sx={{ mt: 3 }}>
                No trend data available
            </Typography>
        );
    }

    return (
        <Paper sx={{ p: 3, mt: 3 }}>
            <Typography
                variant="h6"
                gutterBottom
            >
                Income vs Expense Trend
            </Typography>

            <ResponsiveContainer
                width="100%"
                height={350}
            >
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Line
                        type="monotone"
                        dataKey="income"
                        name="Income"
                        stroke="#4caf50"
                        strokeWidth={3}
                    />

                    <Line
                        type="monotone"
                        dataKey="expense"
                        name="Expense"
                        stroke="#f44336"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Paper>
    );
}