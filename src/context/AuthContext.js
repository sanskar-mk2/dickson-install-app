import { createContext, useReducer } from "react";
export const AuthContext = createContext();

export const auth_reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload,
            };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(auth_reducer, {
        user: null,
    });
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
