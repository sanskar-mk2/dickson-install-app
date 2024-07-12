import { OrderConstants } from "../constants/OrderConstants";

export const order_reducer = (_, action) => {
    switch (action.type) {
        case OrderConstants.ORDER:
            return {
                orders: action.payload,
            };
        default:
            throw new Error(`Unhandled type ${action.type} in order_reducer`);
    }
};
