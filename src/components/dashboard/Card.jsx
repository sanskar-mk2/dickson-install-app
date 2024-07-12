import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card({ title, link }) {
    return (
        <Link className="w-full md:w-1/2" to={link}>
            <div className="bg-dickson p-6 rounded text-white text-3xl font-bold">
                {title}
            </div>
        </Link>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Card;
