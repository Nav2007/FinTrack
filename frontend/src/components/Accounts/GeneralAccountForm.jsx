import { useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import CircleIcon from "@mui/icons-material/Circle";

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

const generalAccountSchema = z.object({

    name: z
        .string()
        .trim()
        .min(1, "Enter account name")
        .max(100, "Maximum 100 characters"),

    openingBalance: z
        .coerce
        .number()
        .min(0, "Balance cannot be negative"),

    color: z
        .string()
        .min(1, "Select a color")

});

export default function GeneralAccountForm({

    onBack,

    onClose

}) {

    const {

        register,

        handleSubmit,

        setValue,

        watch,

        reset,

        formState: {

            errors

        }

    } = useForm({

        resolver: zodResolver(generalAccountSchema),

        defaultValues: {

            name: "",

            openingBalance: "",

            color: ""

        }

    });

    const selectedColor = watch("color");

    function onSubmit(data) {

        console.log(data);

        reset();

        onClose();

    }

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
        >

            <Typography
                variant="body2"
                color="text.secondary"
                mb={3}
            >
                Enter the details of your account.
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

                label="Initial Balance"

                type="number"

                fullWidth

                margin="normal"

                {...register("openingBalance")}

                error={!!errors.openingBalance}

                helperText={errors.openingBalance?.message}

            />

            <Box
                mt={3}
            >

                <Typography
                    mb={1}
                >
                    Account Color
                </Typography>

                <Box

                    display="flex"

                    gap={1}

                    flexWrap="wrap"

                >

                    {

                        accountColors.map((color) => (

                            <IconButton

                                key={color}

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

                {

                    errors.color && (

                        <Typography

                            color="error"

                            variant="caption"

                        >

                            {errors.color.message}

                        </Typography>

                    )

                }

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