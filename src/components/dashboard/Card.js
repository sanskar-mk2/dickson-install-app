import { Link } from "react-router-dom";

function Card({ title, link }) {
    return (
        <Link className="w-full md:w-1/2" to={link}>
            <div className="bg-dickson p-6 rounded text-white text-3xl font-bold">{title}</div>
        </Link>
    );
}

export default Card;
