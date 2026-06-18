import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF4560"
];

export default function ExpensePieChart({ data }) {

    if (data.length === 0) {
        return (
            <Typography sx={{ mt: 3 }}>
                No expense data available
            </Typography>
        );
    }

    return (
        <Paper sx={{ p: 3, mt: 3 }}>
            <Typography
                variant="h6"
                gutterBottom
            >
                Expense Distribution
            </Typography>

            <ResponsiveContainer
                width="100%"
                height={350}
            >
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={
                                    COLORS[
                                        index % COLORS.length
                                    ]
                                }
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </Paper>
    );
}