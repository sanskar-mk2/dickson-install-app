import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDetailContext } from "../hooks/useDetailContext";
import Card from "../components/details/Card";
import { BASE_URL } from "../constants/Constants";
function Details() {
    const { dispatch, details } = useDetailContext();
    const { id } = useParams();
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const [building, set_building] = useState("");
    const [floor, set_floor] = useState("");
    const [unit_number, set_unit_number] = useState("");
    const [status, set_status] = useState("");

    const filter_logic = () => {
        return details.filter(
            (e) =>
                (building === e.building || !building) &&
                (floor === e.floor || !floor) &&
                (unit_number === e.unit_number || !unit_number) &&
                (status === e.status || !status)
        );
    };

    useEffect(() => {
        if (!user) navigate("/login");
        const get_details = async () => {
            if (!user) return;
            const form = new FormData();
            form.append("user_id", user.user_id);
            form.append("order_id", id);
            const response = await fetch(`${BASE_URL}/details`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: form,
            });

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

    return (
        <>
            {details && (
                <div className="flex flex-col w-full p-4  mb-4  pl-10 pr-10 bg-white rounded">
                    <div className="text-dickson text-2xl mb-2">Filters</div>
                    <div className="flex gap-10 flex-wrap">
                        <div className="flex grow gap-2 items-center justify-between">
                            <label className="text-xl" htmlFor="building">
                                Building
                            </label>
                            <select
                                className="bg-dickson text-white rounded p-2"
                                defaultValue=""
                                onChange={(e) => set_building(e.target.value)}
                                id="building"
                            >
                                <option value="">Filter Building</option>
                                {[
                                    ...new Set(details.map((e) => e.building)),
                                ].map((e) => (
                                    <option key={e} value={e}>
                                        {e}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex grow gap-2 items-center justify-between">
                            <label className="text-xl" htmlFor="floor">
                                Floor
                            </label>
                            <select
                                className="bg-dickson text-white rounded p-2"
                                onChange={(e) => set_floor(e.target.value)}
                                defaultValue=""
                                id="floor"
                            >
                                <option value="">Filter Floor</option>
                                {[...new Set(details.map((e) => e.floor))].map(
                                    (e) => (
                                        <option key={e} value={e}>
                                            {e}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>
                        <div className="flex grow gap-2 items-center justify-between">
                            <label
                                className="text-xl"
                                defaultValue=""
                                htmlFor="unit_number"
                            >
                                Unit Number
                            </label>
                            <select
                                className="bg-dickson text-white rounded p-2"
                                onChange={(e) =>
                                    set_unit_number(e.target.value)
                                }
                                id="unit_number"
                            >
                                <option value="">Filter Unit Number</option>
                                {[
                                    ...new Set(
                                        details.map((e) => e.unit_number)
                                    ),
                                ].map((e) => (
                                    <option key={e} value={e}>
                                        {e}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex grow gap-2 items-center justify-between">
                            <label
                                className="text-xl"
                                defaultValue=""
                                htmlFor="status"
                            >
                                Status
                            </label>
                            <select
                                className="bg-dickson text-white rounded p-2"
                                onChange={(e) => set_status(e.target.value)}
                                id="status"
                            >
                                <option value="">Filter Status</option>
                                {[...new Set(details.map((e) => e.status))].map(
                                    (e) => (
                                        <option key={e} value={e}>
                                            {e}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex flex-wrap justify-between items-center gap-2">
                {details &&
                    filter_logic().map((e) => (
                        <Card key={e.unit_id} detail={e} />
                    ))}
            </div>
        </>
    );
}

export default Details;
