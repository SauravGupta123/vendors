import React, { useState, useRef, useEffect } from 'react'
import { useCart, useDispatchCart } from '../../components/contextReducer';
import { useParams } from 'react-router';
import Navbar from '../../components/Navbar';
import Cards from '../../components/Cards';


function ShopDetails() {




    //filteri
    const { id } = useParams();
    const [shopProducts, setShopProducts] = useState([]);
    const [shopName, setshopName] = useState('');
    const removeSpace = (str) => {


        return str.replace(/\s/g, '');
    }
    useEffect(() => {
        const fetchShops = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/foodData', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                let data = await response.json();
                data = data[0];
                console.log("foodData ", data);

                // Filter the data based on the CategoryName and shopId
                const filteredProducts = data.filter(product => {

                    let temp = removeSpace(product.CategoryName);
                    return (id == temp);



                });

                // Set the filtered products to the state
                setShopProducts(filteredProducts);
                console.log(filteredProducts);
                setshopName(filteredProducts[0].CategoryName)
            } catch (err) {
                console.log(err);
            }
        };

        fetchShops();
    }, [id]);





    return (
        <div>
            <Navbar />
            <div className="heading">
                <h1>{shopName}</h1>
            </div>
            <div className="cards flex flex-col">
                {shopProducts.map(product => (

                    // <div key={product.name} className="card w-96 bg-base-100 shadow-xl">
                    //     <figure><img src={product.img} alt={product.name} /></figure>
                    //     <div className="card-body">
                    //         <h2 className="card-title">{product.name}</h2>
                    //         <p>{product.description}</p>
                    //         <div className="card-actions justify-end">
                    //             <div className="container w-100">

                    //                 <button className='bg-success fs-5' onClick={handleAddToCart}>Add To Cart</button>
                    //             </div>
                    //             <button className="btn btn-primary">Buy Now</button>
                    //         </div>
                    //     </div>
                    // </div>

                    <Cards foodItem={product} options={product.options[0]}/>

                ))}
            </div>
        </div>
    );
}

export default ShopDetails;
