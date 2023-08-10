import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDetailContext } from "../hooks/useDetailContext";
import ItemCard from "../components/upload/ItemCard";
function Upload() {
    const { details } = useDetailContext();
    const { id } = useParams();
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const [success, set_success] = useState("");
    const [unit, set_unit] = useState();
    const [remarks, set_remarks] = useState("");
    const [images, set_images] = useState([]);
    const [status, set_status] = useState("");

    const send_remarks = async (with_notify) => {
        const form = new FormData();
        form.append("unit_id", unit.unit_id);
        form.append("user_id", user.user_id);
        form.append("status", status);
        form.append("notify", with_notify ? "yes" : "no");
        if (remarks) form.append("remarks", remarks);
        if (images.length) {
            [...images].forEach((e) => {
                form.append("image[]", e);
            });
        }

        const response = await fetch(
            "https://dickson.s11i.com/api/v1/send_remarks",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: form,
            }
        );

        if (response.status === 204) {
            console.log("success");
            set_success(
                "Successfully sent remarks. Redirecting in 5 seconds..."
            );
            setTimeout(() => {
                return navigate("/orders");
            }, 5000);
        } else {
            const json = await response.json();
            console.error(json);
            navigate("/orders");
            return;
        }
    };

    useEffect(() => {
        if (!user) {
            navigate("/login");
            return;
        }
        set_unit(details.find((e) => e.unit_id === Number(id)));
        set_status(unit?.status || "");
    }, [details, id, navigate, user, unit]);

    return (
        <>
            {unit && (
                <div className="w-full bg-white rounded p-4 flex flex-col">
                    <h2 className="text-2xl">
                        Unit Number{" "}
                        <span className="font-bold">{unit.unit_number}</span>
                    </h2>
                    <div className="flex gap-4 mb-2">
                        <p className="text-xl">{unit.unit_type}</p>
                        <p className="text-xl">Floor {unit.floor}</p>
                        <p className="text-xl">Building {unit.building}</p>
                    </div>
                    <hr />

                    <p className="text-2xl mt-2 mb-2">QUANTITY</p>

                    <div className="flex gap-4 mb-2 flex-wrap">
                        {unit.to_install.map((e, i) => (
                            <ItemCard key={i} item={e} />
                        ))}
                    </div>
                    <hr />
                    <h3 className="text-xl mt-2">Installer Remarks</h3>
                    <p className="mb-2">
                        {unit.intaller_remarks && unit.installer_remarks}
                    </p>
                    <hr />
                    <h3 className="text-xl mt-2">Installer Images</h3>
                    <div className="mb-2 flex overflow-x-auto">
                        {unit.installer_images.map((e, i) => (
                            <img
                                className="h-32"
                                key={i}
                                src={e}
                                alt="Installer Uploaded"
                            />
                        ))}
                    </div>
                    <hr />
                    <h3 className="text-xl mt-2">Customer Remarks</h3>
                    <p className="mb-2">
                        {unit.customer_remarks && unit.customer_remarks}
                    </p>
                    <hr />
                    <h3 className="text-xl mt-2">Customer Images</h3>
                    <div className="mb-2 flex overflow-x-auto">
                        {unit.customer_images.map((e, i) => (
                            <img
                                className="h-32"
                                key={i}
                                src={e}
                                alt="Customer Uploaded"
                            />
                        ))}
                    </div>
                    <hr />
                    <h3 className="text-xl mt-2">Add Remarks</h3>
                    <textarea
                        value={remarks}
                        onChange={(e) => set_remarks(e.target.value)}
                        className="mb-2 rounded p-4 border-2 border-dickson"
                        cols={2}
                    />
                    <hr />
                    <h3 className="text-xl mb-2 mt-2">Upload Images</h3>
                    <div className="mb-2 w-full flex overflow-x-auto">
                        <input
                            type="file"
                            accept="image/*"
                            capture="camera"
                            className="grow"
                            multiple
                            onChange={(e) => set_images(e.target.files)}
                        />
                        <div className="flex grow gap-2 items-center">
                            <label className="text-xl" htmlFor="status">
                                Status
                            </label>
                            <select
                                className="bg-dickson text-white rounded p-2"
                                onChange={(e) => set_status(e.target.value)}
                                id="status"
                                value={status}
                            >
                                <option hidden value="">
                                    Select Status
                                </option>
                                {[
                                    "not started",
                                    "in progress",
                                    "completed",
                                ].map((e) => (
                                    <option key={e} value={e}>
                                        {e}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-2 flex gap-8">
                        <button
                            onClick={() => send_remarks(false)}
                            className="grow text-2xl rounded-full bg-dickson text-white font-bold p-2"
                        >
                            Send
                        </button>
                        <button
                            onClick={() => send_remarks(true)}
                            className="grow text-2xl rounded-full bg-dickson text-white font-bold p-2"
                        >
                            Send & Notify
                        </button>
                    </div>
                    <p className="text-green-500 mt-2">{success}</p>
                </div>
            )}
        </>
    );
}

export default Upload;
