import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card({ detail }) {
    return (
        <>
            <div className="bg-white grow p-6 rounded flex flex-col w-80 gap-4">
                <h2 className="text-2xl">
                    Unit Number{" "}
                    <span className="font-bold">{detail.unit_number}</span>
                </h2>
                <div className="flex gap-8">
                    <p className="text-xl">{detail.unit_type}</p>
                    <p className="text-xl">
                        Status:{" "}
                        <span className="font-bold text-dickson">
                            {detail.status}
                        </span>
                    </p>
                </div>
                <div className="flex gap-8">
                    <p>
                        Floor: <span className="font-bold">{detail.floor}</span>
                    </p>
                    <p>
                        Building:{" "}
                        <span className="font-bold">{detail.building}</span>
                    </p>
                </div>
                <Link to={`/upload/${detail.unit_id}`}>
                    <p className="font-bold text-white bg-dickson p-2 text-center rounded-full">
                        UPLOAD IMAGES
                    </p>
                </Link>
            </div>
        </>
    );
}

Card.propTypes = {
    detail: PropTypes.shape({
        unit_number: PropTypes.string.isRequired,
        unit_type: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        floor: PropTypes.string.isRequired,
        building: PropTypes.string.isRequired,
        unit_id: PropTypes.number.isRequired,
    }).isRequired,
};

export default Card;
