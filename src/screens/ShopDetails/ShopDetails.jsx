import React from 'react'

function ShopDetails() {

    const product= [
        {
          "name": "Biscuit",
          "price": 10,
          "description": "p",
          "image_url": "https://example.com/apple.jpg",
          "category": "Fruits",
          "quantity": 10,
          "brand": "Organic Farms"
        },
        {
          "name": "Milk",
          "price": 2.0,
          "description": "Full-fat, pasteurized milk",
          "image_url": "https://example.com/milk.jpg",
          "category": "Dairy",
          "quantity": 1,
          "brand": "Farm Fresh Dairy"
        },
        {
          "name": "Bread",
          "price": 1.5,
          "description": "Freshly baked wheat bread",
          "image_url": "https://example.com/bread.jpg",
          "category": "Bakery",
          "quantity": 1,
          "brand": "Artisan Bakers"
        },
        {
          "name": "Eggs",
          "price": 1.0,
          "description": "Farm-fresh brown eggs",
          "image_url": "https://example.com/eggs.jpg",
          "category": "Dairy",
          "quantity": 12,
          "brand": "Local Farms"
        }
      ]
      
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default ShopDetails
