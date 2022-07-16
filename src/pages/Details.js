import { useParams } from "react-router-dom";

function Details() {
    const { id } = useParams();
    return (
        <>
            <p>{id}</p>
        </>
    );
}

export default Details;
