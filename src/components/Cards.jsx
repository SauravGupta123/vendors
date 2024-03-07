import React, { useState, useRef, useEffect } from 'react';
import { useCart, useDispatchCart } from './contextReducer';
import './cards.css';
import books from '../../public/assets/books.jpeg';
import biscuit from '../../public/assets/biscuit.jpeg';
import bucket from '../../public/assets/bucket.jpeg';
import chips from '../../public/assets/chips.png';
import chocolate from '../../public/assets/chocolate.jpeg';
import coke from '../../public/assets/coke.jpeg';
import cooker from '../../public/assets/cooker.png';
import pen from '../../public/assets/pen.jpeg';
import plates from '../../public/assets/plates.jpeg';
import tape from '../../public/assets/tape.jpeg';

function Cards({ foodItem, options }) {
    const priceOptions = Object.keys(options);
    const data = useCart();
    const priceRef = useRef();
    const dispatch = useDispatchCart();
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    const imgMap = {
        'books': books,
        'biscuit':biscuit,
        'bucket': bucket,
        'chips': chips,
        'chocolate': chocolate,
        'coke': coke,
        'cooker': cooker,
        'pen': pen,
        'plates': plates,
        'tape': tape,
    };

    const img = imgMap[foodItem.img] || '';

    const Id = foodItem._id;
    const name = foodItem.name;
    const description = foodItem.description;

    const finalPrice = qty * parseInt(options[size]);

    const handleAddToCart = async () => {
        let food = data.find((item) => item.id === foodItem._id);

        if (food) {
            if (food.size !== size) {
                await dispatch({
                    type: "ADD",
                    id: Id,
                    img: img,
                    name: name,
                    description: description,
                    price: finalPrice,
                    qty: qty,
                    size: size
                });
                return;
            }
            await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty });
            return;
        } else {
            await dispatch({
                type: "ADD",
                id: Id,
                img: img,
                name: name,
                description: description,
                price: finalPrice,
                qty: qty,
                size: size
            });
        }
    };

    useEffect(() => {
        setSize(priceRef.current.value)
    }, []);

    return (
        <>
            {console.log("data in card", data)}
            <div className="card mt-5 " style={{ width: "27rem" }}>
                <img src={img} className="card-img-top" alt="..." style={{ height: "320px", objectFit: 'fill' }} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <div className="container w-100">
                        <select name="" id="" className="m-2 h-100 bg-success rounded" onChange={(e) => { setQty(e.target.value) }}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select name="" id="" ref={priceRef} className="m-2 h-100 w-30 bg-success rounded" onChange={(e) => { setSize(e.target.value) }}>
                            {priceOptions.map((data) => {
                                return (
                                    <option key={data} value={data}>{data}</option>
                                )
                            })}
                        </select>
                        <div className="d-inline h-100 fs-5">
                            Rs. {finalPrice}
                        </div>
                        <hr />
                        <button className='bg-success fs-5' onClick={handleAddToCart}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
