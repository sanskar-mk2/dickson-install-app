import { useContext } from "react";
import { DetailContext } from "../context/DetailContext";

export const useDetailContext = () => {
    const context = useContext(DetailContext);

    if (!context) {
        throw Error(
            "useDetailContext must me used inside a DetailContextProvider"
        );
    }

    return context;
};
