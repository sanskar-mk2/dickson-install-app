import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

function Logout() {
    const { user, dispatch } = useAuthContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/login");
            return;
        }
        dispatch({ type: "LOGOUT" });
        navigate("/login");
    });
    return (
        <div className="flex w-full justify-center">
            <p>Logging Out...</p>
        </div>
    );
}

export default Logout;
