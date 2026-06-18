import { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

import { incomeCategories, expenseCategories } from "../../constants/categories";
import CategoryDropdown from "../../inputs/CategoryDropdown";
import { TransactionContext } from "../../context/TransactionContext";

const transactionSchema = z.object({
    account: z.string().trim().min(1, "Select an account"),
    type: z.string().trim().min(1, "Select a type"),
    category: z.string().trim().min(1, "Select a category"),
    amount: z.coerce.number().positive("Enter valid amount"),
    date: z.any(),
    time: z.any()
});

export default function TransactionForm() {

    const { setTransactions } =
        useContext(TransactionContext);

    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        watch,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(transactionSchema),
        defaultValues: {
            account: "",
            type: "",
            category: "",
            amount: "",
            date: dayjs(),
            time: dayjs()
        }
    });

    const resetForm = () => {
        reset({
            account: "",
            type: "",
            category: "",
            amount: "",
            date: dayjs(),
            time: dayjs()
        });
    };

    const onSubmit = (data) => {

        const transaction = {
            id: crypto.randomUUID(),
            ...data
        };

        setTransactions(prev => [
            ...prev,
            transaction
        ]);

        resetForm();
        setOpen(false);
    };

    const selectedType = watch("type");

    const categories =
        selectedType === "income"
            ? incomeCategories
            : expenseCategories;

    return (
        <>
            <Button
                variant="contained"
                onClick={() => setOpen(true)}
            >
                ADD TRANSACTION
            </Button>

            <Dialog
                open={open}
                onClose={() => {
                    resetForm();
                    setOpen(false);
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField
                        select
                        label="Type"
                        fullWidth
                        margin="normal"
                        {...register("type")}
                        error={!!errors.type}
                        helperText={errors.type?.message}
                    >
                        <MenuItem value="income">
                            Income
                        </MenuItem>

                        <MenuItem value="expense">
                            Expense
                        </MenuItem>
                    </TextField>

                    <CategoryDropdown
                        categories={categories}
                        register={register}
                        error={errors.category}
                    />

                    <TextField
                        select
                        label="Account"
                        fullWidth
                        margin="normal"
                        {...register("account")}
                        error={!!errors.account}
                        helperText={errors.account?.message}
                    >
                        <MenuItem value="hdfc">
                            HDFC
                        </MenuItem>

                        <MenuItem value="icici">
                            ICICI
                        </MenuItem>

                        <MenuItem value="sbi">
                            SBI
                        </MenuItem>
                    </TextField>

                    <TextField
                        label="Amount"
                        type="number"
                        fullWidth
                        margin="normal"
                        {...register("amount")}
                        error={!!errors.amount}
                        helperText={errors.amount?.message}
                    />

                    <Controller
                        name="date"
                        control={control}
                        render={({ field }) => (
                            <DatePicker
                                label="Date"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />

                    <Controller
                        name="time"
                        control={control}
                        render={({ field }) => (
                            <TimePicker
                                label="Time"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />

                    <Box
                        display="flex"
                        justifyContent="flex-end"
                        gap={2}
                        mt={3}
                    >
                        <Button
                            variant="outlined"
                            onClick={() => {
                                resetForm();
                                setOpen(false);
                            }}
                        >
                            Close
                        </Button>

                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Save Transaction
                        </Button>
                    </Box>

                </form>
            </Dialog>
        </>
    );
}