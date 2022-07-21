import { createContext, useReducer } from "react";
import { DetailConstants } from "../constants/DetailConstants";
export const DetailContext = createContext();

export const detail_reducer = (state, action) => {
    switch (action.type) {
        case DetailConstants.DETAIL:
            return {
                details: action.payload,
            };
        default:
            throw new Error(`Unhandled type ${action.type} in detail_reducer`);
    }
};

export const DetailContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(detail_reducer, {
        details: null,
    });
    return (
        <DetailContext.Provider value={{ ...state, dispatch }}>
            {children}
        </DetailContext.Provider>
    );
};
