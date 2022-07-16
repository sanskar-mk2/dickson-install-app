import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col items-center gap-6">
            <p className="text-3xl">Page Not Found</p>
            <Link to="/">
                <p className="text-white bg-dickson p-4 rounded-full text-3xl">
                    Return Home
                </p>
            </Link>
        </div>
    );
}

export default NotFound;
