import { useEffect, useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import AccountTypeSelection from "./AccountTypeSelection";
import GeneralAccountForm from "./GeneralAccountForm";
import CreditAccountForm from "./CreditAccountForm";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export default function AddAccountDialog({
    open,
    onClose
}) {

    const [step, setStep] = useState(1);
    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {

        if (!open) {

            setStep(1);
            setSelectedType("");

        }

    }, [open]);

    const handleClose = () => {

        setStep(1);
        setSelectedType("");

        onClose();

    };

    return (
    <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
    >

        <DialogTitle>
            {
                step === 1
                    ? "Create New Account"
                    : selectedType === "general"
                        ? "Create General Account"
                        : "Create Credit Account"
            }
        </DialogTitle>

        <DialogContent>

            {
                step === 1 &&

                <AccountTypeSelection
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                />
            }

            {
                step === 2 &&
                selectedType === "general" &&

                <GeneralAccountForm
                    onBack={() => setStep(1)}
                    onClose={handleClose}
                />
            }

            {
                step === 2 &&
                selectedType === "credit" &&

                <CreditAccountForm
                    onBack={() => setStep(1)}
                    onClose={handleClose}
                />
            }

        </DialogContent>

        {
            step === 1 &&

            <DialogActions>

                <Button
                    onClick={handleClose}
                >
                    Cancel
                </Button>

                <Button
                    variant="contained"
                    disabled={!selectedType}
                    onClick={() => setStep(2)}
                >
                    Continue
                </Button>

            </DialogActions>
        }

    </Dialog>
);

}