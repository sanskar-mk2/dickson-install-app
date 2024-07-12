import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { auth_reducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

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

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
