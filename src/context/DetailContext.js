import { createContext, useReducer } from "react";
export const DetailContext = createContext();

export const detail_reducer = (state, action) => {
    switch (action.type) {
        case "DETAIL":
            return {
                details: action.payload,
            };
        default:
            return state;
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
