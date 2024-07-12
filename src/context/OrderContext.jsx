import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { order_reducer } from "../reducers/OrderReducer";

export const OrderContext = createContext();

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

OrderContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
