import { DetailConstants } from "../constants/DetailConstants";

export const detail_reducer = (_, action) => {
    switch (action.type) {
        case DetailConstants.DETAIL:
            return {
                details: action.payload,
            };
        default:
            throw new Error(`Unhandled type ${action.type} in detail_reducer`);
    }
};