import { Link } from "react-router-dom";
import LeftArrow from "../icons/LeftArrow";

function Navbar() {
    return (
        <header className="bg-white h-20 sm:h-fit items-center w-full p-4 flex justify-center">
            <div className="container">
                <div className="flex relative container items-center justify-center font-bold">
                    <div className="absolute left-0 ml-8">
                        <Link to="/">
                            <LeftArrow className="w-16 text-dickson" />
                        </Link>
                    </div>
                    <Link to="/">
                        <div className="w-fit hidden sm:flex justify-center flex-col">
                            <h1 className="font-bold text-6xl text-center text-dickson">
                                DICKSON
                            </h1>
                            <h1 className="border-2 font-bold text-center text-dickson border-dickson">
                                FURNITURE MANUFACTURERS
                            </h1>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
