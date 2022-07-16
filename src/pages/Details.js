import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDetailContext } from "../hooks/useDetailContext";
import Card from "../components/details/Card";
function Details() {
    const { id } = useParams();
    const { user } = useAuthContext();
    const { dispatch, details } = useDetailContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) navigate("/login");
        const get_details = async () => {
            const form = new FormData();
            form.append("user_id", user.user_id);
            form.append("order_id", id);
            const response = await fetch(
                `http://in.dfm-dashboard.com/api/v1/details`,
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
                dispatch({ type: "DETAIL", payload: json });
            }
            if (!response.ok) {
                console.error(json);
            }
        };

        get_details();
    }, [dispatch, id, user, navigate]);

    // const [error, set_error] = useState("");
    return (
        <div className="flex flex-wrap items-center gap-2">
            {details && details.map((e) => <Card key={e.unit_id} detail={e} />)}
        </div>
    );
}

export default Details;
