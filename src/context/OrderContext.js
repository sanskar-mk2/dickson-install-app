import { createContext, useReducer } from "react";
import { OrderConstants } from "../constants/OrderConstants";
export const OrderContext = createContext();

export const order_reducer = (state, action) => {
    switch (action.type) {
        case OrderConstants.ORDER:
            return {
                orders: action.payload,
            };
        default:
            throw new Error(`Unhandled type ${action.type} in order_reducer`);
    }
};

export const OrderContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(order_reducer, {
        orders: null,
    });
    return (
        <OrderContext.Provider value={{ ...state, dispatch }}>
            {children}
        </OrderContext.Provider>
    );
};
