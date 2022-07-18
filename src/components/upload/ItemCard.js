import Cog from "../icons/Cog";

function ItemCard({ item }) {
    return (
        <div className="flex items-center gap-4">
            <div className="p-4 bg-gray-300 rounded-xl">
                <Cog />
            </div>
            <div className="w-24">
                <p>{item.item_name}</p>
                <p className="font-bold">{item.quantity}</p>
            </div>
        </div>
    );
}

export default ItemCard;
