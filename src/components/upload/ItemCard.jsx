import PropTypes from 'prop-types';
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

ItemCard.propTypes = {
    item: PropTypes.shape({
        item_name: PropTypes.string.isRequired,
        quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    }).isRequired,
};

export default ItemCard;