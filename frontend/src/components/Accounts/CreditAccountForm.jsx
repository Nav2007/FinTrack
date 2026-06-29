import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import CircleIcon from "@mui/icons-material/Circle";
import {createCreditAccount} from "../../api/accountApi";

const accountColors = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#EC4899",
    "#14B8A6",
    "#6B7280"
];

const creditAccountSchema = z.object({

    name: z
        .string()
        .trim()
        .min(1, "Enter account name")
        .max(50, "Maximum 50 characters"),

    creditLimit: z
        .coerce
        .number()
        .positive("Credit limit must be greater than 0"),

    currentOutstanding: z
        .coerce
        .number()
        .min(0, "Outstanding cannot be negative"),

    dueDay: z
        .coerce
        .number()
        .min(1, "Due day must be between 1 and 31")
        .max(31, "Due day must be between 1 and 31"),

    color: z
        .string()
        .min(1, "Select an account color")

});

export default function CreditAccountForm({

    onBack,

    onClose

}) {

    const {

        register,

        handleSubmit,

        watch,

        setValue,

        reset,
        setError,

        formState: {

            errors

        }

    } = useForm({

        resolver: zodResolver(creditAccountSchema),

        defaultValues: {

            name: "",

            creditLimit: "",

            currentOutstanding: "",

            dueDay: "",

            color: ""

        }

    });

    const selectedColor = watch("color");

   async function onSubmit(data) {

    try {

        const response =
            await createCreditAccount(data);

        console.log(response.data);

        reset();

        onClose();

    }

    catch (error) {

        if (error.response?.data?.field) {

            setError(
                error.response.data.field,
                {
                    type: "server",
                    message: error.response.data.message
                }
            );

            return;
        }

        console.error(error);

    }

}

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <Typography
                variant="body2"
                color="text.secondary"
                mb={3}
            >
                Fill in the details of your credit account.
            </Typography>

            <TextField
                label="Account Name"
                fullWidth
                margin="normal"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
            />

            <TextField
                label="Credit Limit"
                type="number"
                fullWidth
                margin="normal"
                {...register("creditLimit")}
                error={!!errors.creditLimit}
                helperText={errors.creditLimit?.message}
            />

            <TextField
                label="Current Outstanding"
                type="number"
                fullWidth
                margin="normal"
                {...register("currentOutstanding")}
                error={!!errors.currentOutstanding}
                helperText={errors.currentOutstanding?.message}
            />

            <TextField
                label="Payment Due Day"
                type="number"
                fullWidth
                margin="normal"
                {...register("dueDay")}
                error={!!errors.dueDay}
                helperText={errors.dueDay?.message}
                inputProps={{
                    min: 1,
                    max: 31
                }}
            />

            <Box mt={3}>

                <Typography mb={1}>
                    Account Color
                </Typography>

                <Box
                    display="flex"
                    gap={1}
                    flexWrap="wrap"
                >

                    {

                        accountColors.map(color => (

                            <IconButton
                                key={color}
                                type="button"
                                onClick={() =>
                                    setValue(
                                        "color",
                                        color,
                                        {
                                            shouldValidate: true
                                        }
                                    )
                                }
                                sx={{
                                    border:
                                        selectedColor === color
                                            ? "2px solid #1976d2"
                                            : "2px solid transparent",
                                    borderRadius: "50%"
                                }}
                            >

                                <CircleIcon
                                    sx={{
                                        color
                                    }}
                                />

                            </IconButton>

                        ))

                    }

                </Box>

                <Typography
                    color="error"
                    variant="caption"
                >
                    {errors.color?.message}
                </Typography>

            </Box>

            <Box
                display="flex"
                justifyContent="space-between"
                mt={4}
            >

                <Button
                    variant="outlined"
                    onClick={onBack}
                >
                    Back
                </Button>

                <Button
                    type="submit"
                    variant="contained"
                >
                    Create Account
                </Button>

            </Box>

        </form>

    );

}