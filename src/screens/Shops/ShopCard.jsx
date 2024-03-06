import { Link } from "react-router-dom";

function ShopCard({ name, photo, hex }) {

    const removeWhiteSpace = (str) => {
        return str.replace(/\s/g, '');
    }

    return (
        <div className="m-2">
            <div className="bg-zinc-700 rounded p-2 flex flex-row">
                <img src={photo} className="w-28 p-2 rounded-xl" />
                <div className="flex flex-column">
                    <h2 className="font-semibold text-xl">{name}</h2>
                    {/* <p></p> */}
                    <Link to={`/shops/${removeWhiteSpace(name)}`} className="btn btn-success w-28">View Shop</Link>
                </div>
            </div>
        </div>
    );
}

export default ShopCard;