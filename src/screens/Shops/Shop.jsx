import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import ShopCard from "./ShopCard";

function Shops() {
    const [loading, setLoading] = useState(true);
    const [shops, setShops] = useState([]);

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/foodData', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();
                console.log(data);

                if (data.length > 0) {
                    setShops(data[1]);
                    setLoading(false);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchShops();
    }, []);

    if (loading) {
        return (
            <ClipLoader
                color="#36D7B7"
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
            />
        );
    }

    return (
        <div className="container my-4 mx-auto">
            <h2 className="text-4xl font-bold text-center">Neaby Shops in your Polygon</h2>
            {shops.map((data) => (
                <div key={data._id} className='row mb-3'>
                    <ShopCard name={data.CategoryName} photo={data.photo} hex={data.hex} />
                </div> 
            ))}
        </div>
    );
}

export default Shops;