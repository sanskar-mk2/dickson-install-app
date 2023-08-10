import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/orders/Card";
import { useAuthContext } from "../hooks/useAuthContext";
import { useOrderContext } from "../hooks/useOrderContext";
function Orders() {
    const { user } = useAuthContext();
    const { orders, dispatch } = useOrderContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) navigate("/login");
        const get_orders = async () => {
            if (!user) return;
            const form = new FormData();
            form.append("user_id", user.user_id);
            const response = await fetch(
                "https://dickson.s11i.com/api/v1/orders",
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
                dispatch({ type: "ORDER", payload: json });
            }
            if (!response.ok) {
                console.error(json);
            }
        };

        get_orders();
    }, [dispatch, user, navigate]);

    // const [error, set_error] = useState("");
    return (
        <div className="flex flex-col items-center gap-2">
            {orders && orders.map((e) => <Card key={e.order_id} order={e} />)}
        </div>
    );
}

export default Orders;
