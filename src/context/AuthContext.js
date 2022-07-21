import { createContext, useReducer } from "react";
import { AuthConstants } from "../constants/AuthConstants";
export const AuthContext = createContext();

export const auth_reducer = (state, action) => {
    switch (action.type) {
        case AuthConstants.LOGIN:
            localStorage.setItem("user", JSON.stringify(action.payload));
            return {
                user: action.payload,
            };
        case AuthConstants.LOGOUT:
            localStorage.removeItem("user");
            return {
                user: null,
            };
        case AuthConstants.FORGOT:
            return {
                user: null,
                forgot_id: action.payload,
            };
        default:
            throw new Error(`Unhandled type ${action.type} in auth_reducer`);
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(auth_reducer, {
        user: JSON.parse(localStorage.getItem("user")),
    });
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
