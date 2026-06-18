export function getCategoryBreakdown(transactions){

    const map = {};

    transactions
        .filter(t => t.type==="expense")
        .forEach(t => {

            if(!map[t.category]){
                map[t.category]=0;
            }

            map[t.category]+=t.amount;
        });

    return Object.entries(map).map(([name,value])=>({
        name,
        value
    }));
}