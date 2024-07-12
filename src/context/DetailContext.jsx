import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { detail_reducer } from "../reducers/DetailReducer";

export const DetailContext = createContext();

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

DetailContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
