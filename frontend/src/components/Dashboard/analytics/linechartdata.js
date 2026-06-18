export function getMonthlyTrend(transactions){

    const months = {};

    transactions.forEach(t => {

        const month =
            t.date.format("MMM YYYY");

        if(!months[month]){
            months[month]={
                income:0,
                expense:0
            };
        }

        if(t.type==="income"){
            months[month].income+=t.amount;
        }else{
            months[month].expense+=t.amount;
        }

    });

    return Object.entries(months).map(([month,data])=>({
        month,
        ...data
    }));
}