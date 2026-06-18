import React, {
    useState,
    createContext,
    useEffect
} from "react";

import { LocalizationProvider }
from "@mui/x-date-pickers/LocalizationProvider";

import { AdapterDayjs }
from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";

export const TransactionContext =
    createContext();

export default function TransactionProvider({
    children
}) {

    const [transactions, setTransactions] =
        useState(() => {

            const saved =
                localStorage.getItem(
                    "transactions"
                );

            if (!saved) return [];

            return JSON.parse(saved).map(
                t => ({
                    ...t,
                    date: dayjs(t.date),
                    time: dayjs(t.time)
                })
            );
        });

    useEffect(() => {

        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );

    }, [transactions]);

    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
        >
            <TransactionContext.Provider
                value={{
                    transactions,
                    setTransactions
                }}
            >
                {children}
            </TransactionContext.Provider>
        </LocalizationProvider>
    );
}