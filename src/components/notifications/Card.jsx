import PropTypes from "prop-types";
import moment from "moment";

function Card({ notification }) {
    return (
        <>
            <div className="bg-white p-6 w-full rounded flex flex-col gap-2">
                <h2 className="text-3xl">
                    <span className="font-bold">{notification.order}</span>
                </h2>
                <h3 className="text-2xl">
                    Unit Number{" "}
                    <span className="font-bold">
                        {notification.unit_number}
                    </span>
                </h3>
                <div className="flex gap-8">
                    <p>
                        Floor:{" "}
                        <span className="font-bold">{notification.floor}</span>
                    </p>
                    <p>
                        Building:{" "}
                        <span className="font-bold">
                            {notification.building}
                        </span>
                    </p>
                </div>

                <p className="text-xl">
                    <span className="font-bold text-dickson">
                        {notification.message}
                    </span>
                </p>
                <p className="text-gray-600 self-end">
                    {moment(notification.created_at).fromNow()}
                </p>
            </div>
        </>
    );
}

Card.propTypes = {
    notification: PropTypes.shape({
        order: PropTypes.string.isRequired,
        unit_number: PropTypes.string.isRequired,
        floor: PropTypes.string.isRequired,
        building: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;
