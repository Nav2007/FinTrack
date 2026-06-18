import dayjs from "dayjs";

export function getCurrentMonthSummary(transactions){

    const currentMonth = dayjs().month();
    const currentYear = dayjs().year();

    const currentTransactions =
        transactions.filter(t =>
            t.date.month() === currentMonth &&
            t.date.year() === currentYear
        );

    const income = currentTransactions
        .filter(t => t.type === "income")
        .reduce((sum,t) => sum + t.amount,0);

    const expense = currentTransactions
        .filter(t => t.type === "expense")
        .reduce((sum,t) => sum + t.amount,0);

    return {
        income,
        expense,
        net: income - expense
    };
}