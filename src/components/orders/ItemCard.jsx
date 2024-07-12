import PropTypes from "prop-types";
import { useState } from "react";
import Cog from "../icons/Cog";

function ItemCard({ item }) {
    const [modal, set_modal] = useState(false);
    return (
        <div className="flex items-center gap-4">
            {modal && (
                <>
                    <div className="fixed bg-black opacity-50 top-0 left-0 w-screen h-screen"></div>
                    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
                        <div className="bg-white p-4 rounded flex flex-col">
                            <p className="font-bold">Item Descriptions</p>
                            <hr />
                            <div className="m-4 flex flex-col gap-4">
                                <p>{item.item_desc0}</p>
                                <p>{item.item_desc1}</p>
                                <p>{item.item_desc2}</p>
                            </div>
                            <button
                                className="bg-dickson p-2 rounded text-white"
                                onClick={() => set_modal(false)}
                            >
                                CLOSE
                            </button>
                        </div>
                    </div>
                </>
            )}
            <div
                onClick={() => set_modal(true)}
                className="p-4 hover:cursor-pointer bg-gray-300 rounded-xl"
            >
                <Cog />
            </div>
            <div className="w-24">
                <p>{item.item_name}</p>
                <p className="font-bold">{item.quantity}</p>
            </div>
        </div>
    );
}

ItemCard.propTypes = {
    item: PropTypes.shape({
        item_desc0: PropTypes.string,
        item_desc1: PropTypes.string,
        item_desc2: PropTypes.string,
        item_name: PropTypes.string.isRequired,
        quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
            .isRequired,
    }).isRequired,
};

export default ItemCard;
