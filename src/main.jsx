import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { OrderContextProvider } from "./context/OrderContext";
import { DetailContextProvider } from "./context/DetailContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <OrderContextProvider>
                <DetailContextProvider>
                    <App />
                </DetailContextProvider>
            </OrderContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
