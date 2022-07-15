import { Link } from "react-router-dom";

function Card({ title, link }) {
    return (
        <Link to={link}>
            <div className="bg-dickson p-6 rounded text-white text-3xl font-bold">{title}</div>
        </Link>
    );
}

export default Card;
