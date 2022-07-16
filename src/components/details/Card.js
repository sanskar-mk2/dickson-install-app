import { Link } from "react-router-dom";
function Card({ detail }) {
    return (
        <>
            <div className="bg-white p-6 rounded flex flex-col w-80 gap-4">
                <p className="text-2xl">
                    Unit Number{" "}
                    <span className="font-bold">{detail.unit_number}</span>
                </p>
                <div className="flex gap-8">
                    <p className="text-xl">{detail.unit_type}</p>
                    <p className="text-xl">
                        Status:{" "}
                        <span className="font-bold text-dickson">{detail.status}</span>
                    </p>
                </div>
                <div className="flex gap-8">
                    <p>Floor: <span className="font-bold">{detail.floor}</span></p>
                    <p>Building: <span className="font-bold">{detail.building}</span></p>
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

export default Card;
