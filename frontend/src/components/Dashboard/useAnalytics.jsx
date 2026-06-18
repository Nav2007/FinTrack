import { useContext } from "react";

import { TransactionContext }
from "../../context/TransactionContext";

import { getCurrentMonthSummary }
from "./analytics/summary";

import { getCategoryBreakdown }
from "./analytics/category";

import { getAccountSummary }
from "./analytics/accountsummary";

import { getMonthlyTrend }
from "./analytics/linechartdata";

export default function useAnalytics(){

    const { transactions } =
        useContext(TransactionContext);

    return {
        summary:
            getCurrentMonthSummary(transactions),

        categoryData:
            getCategoryBreakdown(
                transactions
            ),

        accountData:
            getAccountSummary(
                transactions
            ),

        trendData:
            getMonthlyTrend(
                transactions
            )
    };
}