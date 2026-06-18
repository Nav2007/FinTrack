export function getAccountSummary(transactions){

    const accounts = {};

    transactions.forEach(t => {

        if(!accounts[t.account]){
            accounts[t.account]={
                income:0,
                expense:0
            };
        }

        if(t.type==="income"){
            accounts[t.account].income+=t.amount;
        }else{
            accounts[t.account].expense+=t.amount;
        }

    });

    return Object.entries(accounts).map(([account,data])=>({
        account,
        ...data,
        balance:data.income-data.expense
    }));
}