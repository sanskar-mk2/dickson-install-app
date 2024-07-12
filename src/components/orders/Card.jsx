import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import Location from "../icons/Location";
import ItemCard from "./ItemCard";

function Card({ order }) {
    const [expand, set_expand] = useState(false);
    return (
        <>
            <div className="bg-white p-6 rounded flex flex-col gap-2">
                <p className="font-bold">{order.order_date}</p>
                <p className="font-bold text-2xl">{order.project_name}</p>
                <div className="flex gap-4">
                    <p className="font-bold">
                        Completed:{" "}
                        <span className="text-dickson">
                            {order.complete_percent} %
                        </span>
                    </p>
                    <p>
                        ({order.completed_count}/{order.total_count}) Units
                    </p>
                    <p className="font-bold">
                        Status:{" "}
                        <span className="text-green-500">{order.status}</span>
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="mt-2 bg-dickson p-2 rounded-full w-fit text-white pl-8 pr-8">
                        ORDER NO: {order.order_number}
                    </p>
                    <p
                        onClick={() => set_expand(!expand)}
                        className="hover:cursor-pointer mt-2 bg-dickson p-2 rounded-full w-fit text-white pl-8 pr-8"
                    >
                        {expand ? "Hide" : "Show"} Details
                    </p>
                </div>
                {expand && (
                    <>
                        <p className="font-bold text-2xl">
                            {order.customer_name}
                        </p>
                        <div className="mt-2">
                            <p className="flex gap-2">
                                <Location /> {order.address},
                            </p>
                            <p>{order.city},</p>
                            <p>
                                {order.state} — {order.zip}
                            </p>
                        </div>
                        <hr />
                        <div>
                            <p className="text-2xl">QUANTITY</p>
                            <p className="text-sm text-gray-500">
                                click on icons to see descriptions
                            </p>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            {order.items.map((e, i) => (
                                <ItemCard key={i} item={e} />
                            ))}
                        </div>
                        <hr />
                        <p className="text-xl font-bold">CONTACT NO.</p>
                        <p className="text-xl">{order.customer_phone}</p>
                        <p className="text-xl font-bold mt-4">
                            Upload Images of the Products Installed
                        </p>
                        <Link to={`/details/${order.order_id}`}>
                            <p className="text-xl font-bold text-white bg-dickson p-4 text-center rounded-full">
                                UPLOAD IMAGES
                            </p>
                        </Link>
                    </>
                )}
            </div>
        </>
    );
}

Card.propTypes = {
    order: PropTypes.shape({
        order_date: PropTypes.string.isRequired,
        project_name: PropTypes.string.isRequired,
        complete_percent: PropTypes.number.isRequired,
        completed_count: PropTypes.number.isRequired,
        total_count: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
        order_number: PropTypes.string.isRequired,
        customer_name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                // Define the shape of your item object here
            })
        ).isRequired,
        customer_phone: PropTypes.string.isRequired,
        order_id: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;
