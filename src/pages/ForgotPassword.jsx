import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { BASE_URL } from "../constants/Constants";

function ForgotPassword() {
    const [email, set_email] = useState("");
    const { dispatch } = useAuthContext();
    const [error, set_error] = useState("");
    const navigate = useNavigate();
    const handle_click = async () => {
        const form = new FormData();
        form.append("email", email);
        const response = await fetch(`${BASE_URL}/request_password_change`, {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: form,
        });

        const json = await response.json();

        if (response.ok) {
            console.log(json);
            set_error("");
            dispatch({ type: "FORGOT", payload: json.user_id });
            return navigate("/new-credentials");
        }

        if (!response.ok) {
            console.error(json.message);
            set_error(json.message);
        }
    };
    return (
        <div className="flex flex-col items-center gap-4 mt-10">
            <h2 className="font-bold text-4xl text-center">
                FORGOT
                <br />
                PASSWORD
            </h2>
            <p className="text-center">
                Provide your account&apos;s email for which you want to reset
                your password!
            </p>
            <input
                value={email}
                onChange={(e) => set_email(e.target.value)}
                type="email"
                placeholder="Enter Email Address"
                className="mt-4 w-full md:w-96 pl-4 text-xl border-2 p-2 border-black rounded-full outline-1 outline-dickson"
            />
            <input
                onClick={handle_click}
                type="button"
                className="hover:cursor-pointer w-full md:w-96 mt-8 rounded-full p-4 text-white bg-dickson"
                value="Next"
            />
            <p className="text-red-500 mt-2">{error}</p>
        </div>
    );
}

export default ForgotPassword;
