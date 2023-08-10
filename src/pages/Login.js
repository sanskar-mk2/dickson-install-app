import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

function Login() {
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();
    const handle_login = async () => {
        const form = new FormData();
        form.append("email", email);
        form.append("password", password);
        const response = await fetch(
            "https://dickson.s11i.com/api/v1/login",
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
            dispatch({ type: "LOGIN", payload: json });
            navigate("/");
        }

        if (!response.ok) {
            console.error(json);
            set_error(json.msg);
        }
    };

    const [email, set_email] = useState("");
    const [password, set_password] = useState("");
    const [error, set_error] = useState("");
    return (
        <div className="flex w-full justify-center">
        <div className="flex flex-col w-full md:w-4/6 items-center bg-white p-8 rounded">
            <h1 className="self-start font-bold text-4xl mt-8">
                Welcome Back!
            </h1>
            <p className="self-start text-xl text-dickson">
                Hey! Good to see you again.
            </p>
            <h1 className="self-start font-bold text-4xl mt-8">Sign In</h1>
            <input
                value={email}
                onChange={(e) => set_email(e.target.value)}
                type="text"
                placeholder="Login as Installer/Customer"
                className="p-2 pl-4 w-full self-start mt-4 text-xl border-2 border-black rounded-full outline-1 outline-dickson"
            />
            <input
                value={password}
                onChange={(e) => set_password(e.target.value)}
                type="password"
                placeholder="Enter Password"
                className="mt-4 pl-4 text-xl border-2 p-2 w-full border-black rounded-full outline-1 outline-dickson"
            />
            <input
                onClick={handle_login}
                type="button"
                className="hover:cursor-pointer w-full mt-8 rounded-full p-4 text-white bg-dickson"
                value="Sign me in"
            />
            <p className="text-red-500 mt-2">{error}</p>
            <Link to="/forgot-password">
                <p className="text-dickson font-bold mt-10">Forgot Password?</p>
            </Link>
        </div>
        </div>
    );
}

export default Login;
