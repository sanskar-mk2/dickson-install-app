import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

export const useOrderContext = () => {
    const context = useContext(OrderContext);

    if (!context) {
        throw Error(
            "useOrderContext must me used inside a OrderContextProvider"
        );
    }

    return context;
};
