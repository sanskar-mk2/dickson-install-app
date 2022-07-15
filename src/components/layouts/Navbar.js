import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="bg-white w-full p-4 flex justify-center">
            <div className="flex container justify-center font-bold">
                <Link to="/">
                    <div className="w-fit flex justify-center flex-col">
                        <h1 className="font-bold text-6xl text-center text-dickson">
                            DICKSON
                        </h1>
                        <h1 className="border-2 font-bold text-center text-dickson border-dickson">
                            FURNITURE MANUFACTURERS
                        </h1>
                    </div>
                </Link>
            </div>
        </header>
    );
}

export default Navbar;
