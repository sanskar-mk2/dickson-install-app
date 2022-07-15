import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useOrderContext } from "../hooks/useOrderContext";
function Orders() {
    const { user } = useAuthContext();
    const { orders, dispatch } = useOrderContext();
    useEffect(() => {
        const get_orders = async () => {
            const form = new FormData();
            form.append("user_id", user.user_id);
            const response = await fetch(
                "http://in.dfm-dashboard.com/api/v1/orders",
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
    }, [dispatch, user]);

    // const [error, set_error] = useState("");
    return (
        <div className="flex flex-col items-center">
            {orders &&
                orders.map((e) => <p key={e.order_id}>{e.project_name}</p>)}
        </div>
    );
}

export default Orders;
