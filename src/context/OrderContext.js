import { createContext, useReducer } from "react";
export const OrderContext = createContext();

export const order_reducer = (state, action) => {
    switch (action.type) {
        case "ORDER":
            return {
                orders: action.payload,
            };
        default:
            return state;
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
