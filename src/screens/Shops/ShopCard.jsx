function ShopCard({ name, photo, hex }) {
    return (
        <div className="m-2">
            <div className="border rounded p-2 flex flex-row">
                <img src={photo} className="w-28 p-2 rounded-xl" />
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export default ShopCard;