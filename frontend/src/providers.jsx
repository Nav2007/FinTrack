import TransactionProvider from "./context/TransactionContext";

export default function AppProviders({ children }) {
    return (
        <TransactionProvider>
            {children}
        </TransactionProvider>
    );
}
