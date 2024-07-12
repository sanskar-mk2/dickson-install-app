import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/orders/Card";
import { useAuthContext } from "../hooks/useAuthContext";
import { useOrderContext } from "../hooks/useOrderContext";
import { BASE_URL } from "../constants/Constants";

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
            const response = await fetch(`${BASE_URL}/orders`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: form,
            });

            const json = await response.json();

            if (response.ok) {
                console.log(json);
                // Convert complete_percent to number and order_id to string for each order
                const processedOrders = json.map((order) => ({
                    ...order,
                    complete_percent: parseFloat(order.complete_percent),
                    order_id: String(order.order_id),
                }));
                dispatch({ type: "ORDER", payload: processedOrders });
            }
            if (!response.ok) {
                console.error(json);
            }
        };

        get_orders();
    }, [dispatch, user, navigate]);

    return (
        <div className="flex flex-col items-center gap-2">
            {orders && orders.map((e) => <Card key={e.order_id} order={e} />)}
        </div>
    );
}

export default Orders;
