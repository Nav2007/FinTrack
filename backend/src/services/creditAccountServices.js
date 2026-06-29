const pool=require("../config/db")
const createCreditAccount=async (name,creditLimit,currentOutstanding,dueDay,color)=>{
    
    const [existingAccount] = await pool.query(
        "SELECT id FROM credit_accounts WHERE name = ?",
        [name]
    );

    if (existingAccount.length > 0) {

        const error = new Error("This account already exists");
        error.status = 400;
        error.field = "name";
        throw error;

    }
    
    
    await pool.query(`
            INSERT INTO credit_accounts (name,credit_limit,opening_outstanding,current_outstanding,
            due_day,color) VALUES (?,?,?,?,?,?)  
        `,[name,creditLimit,currentOutstanding,currentOutstanding,dueDay,color])
}

module.exports = {
    createCreditAccount
};