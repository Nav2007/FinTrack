import useAnalytics from "../../components/Dashboard/useAnalytics";
import SummaryCards from "../../components/Dashboard/summaryCard";
import AccountSummaryTable from "../../components/Dashboard/AccountSummaryTable";
import MonthlyTrendChart from "../../components/Dashboard/MonthlyTrendChart";
import ExpensePieChart from "../../components/Dashboard/ExpensePieChart";
export default function Dashboard() {

    const {
        summary,
        categoryData,
        accountData,
        trendData
    } = useAnalytics();

    return (
        <>
            <SummaryCards summary={summary} />
             <AccountSummaryTable data={accountData}/>
             <MonthlyTrendChart data={trendData}/>
             <ExpensePieChart data={categoryData}/>
        </>
    );
}