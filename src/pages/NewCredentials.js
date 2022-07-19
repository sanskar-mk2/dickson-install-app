import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

function NewCredentials() {
    const [password, set_password] = useState("");
    const [error, set_error] = useState("");
    const [success, set_success] = useState("");
    const [password_confirmation, set_password_confirmation] = useState("");
    const { forgot_id } = useAuthContext();
    const navigate = useNavigate();

    const handle_click = async () => {
        const form = new FormData();
        form.append("user_id", forgot_id);
        form.append("password", password);
        form.append("password_confirmation", password_confirmation);
        const response = await fetch(
            "http://in.dfm-dashboard.com/api/v1/change_password",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: form,
            }
        );

        const json = await response.json();

        if (response.ok) {
            console.log(json);
            set_error("");
            set_success(
                "Successfully reset password. Redirecting in 5 seconds..."
            );
            setTimeout(() => {
                return navigate("/login");
            }, 5000);
        }

        if (!response.ok) {
            console.error(json.message);
            set_error(json.message);
        }
    };

    useEffect(() => {
        if (!forgot_id) return navigate("forgot-password");
    }, [navigate, forgot_id]);
    return (
        <div className="flex flex-col items-center gap-4 mt-10">
            <h2 className="font-bold text-4xl text-center">
                FORGOT
                <br />
                PASSWORD
            </h2>
            <p className="text-center">
                Your identity has been verified! Set your new password
            </p>
            <input
                value={password}
                onChange={(e) => set_password(e.target.value)}
                type="password"
                placeholder="Enter New Password"
                className="mt-4 w-full md:w-96 pl-4 text-xl border-2 p-2 border-black rounded-full outline-1 outline-dickson"
            />
            <input
                value={password_confirmation}
                onChange={(e) => set_password_confirmation(e.target.value)}
                type="password"
                placeholder="Confirm New Password"
                className="mt-4 w-full md:w-96 pl-4 text-xl border-2 p-2 border-black rounded-full outline-1 outline-dickson"
            />
            <input
                onClick={handle_click}
                type="button"
                className="hover:cursor-pointer w-full md:w-96 mt-8 rounded-full p-4 text-white bg-yellow-600"
                value="Next"
            />
            <p className="text-red-500 mt-2">{error}</p>
            <p className="text-green-500 mt-2">{success}</p>
        </div>
    );
}

export default NewCredentials;
