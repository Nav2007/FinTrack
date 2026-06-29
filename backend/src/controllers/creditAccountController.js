const {createCreditAccount}=require('../services/creditAccountServices')

const creditAccountRegister=async (req,res)=>{
        try{
            const {name,creditLimit,currentOutstanding,dueDay,color}=req.body

            await createCreditAccount(name,creditLimit,currentOutstanding,dueDay,color)
            return res.status(201).json({ message: "Account created successfully"})
        }
         catch (error) {

        if (error.status === 400) {

            return res.status(400).json({
                field: error.field,
                message: error.message
            });

        }
        console.error(error);
        return res.status(500).json({
            message: "Server Error"
        });
    }
    }

module.exports = {
    creditAccountRegister
};