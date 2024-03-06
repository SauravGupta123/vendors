import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Homepage.css';
import Cards from '../../components/Cards';
import Carausal from '../../components/Carausal';
import ClipLoader from "react-spinners/ClipLoader";

function Homepage() {
  const [foodData, setFoodData] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch]= useState("");

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/foodData', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        // console.log(data);
        setFoodData(data[0]);
        setFoodCat(data[1]);
  
        if (data.length > 0) {
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchFoodData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='Carausal'>
        <Carausal search={search} setSearch={setSearch}/>
      </div>

      <div className="cards">
        {loading ? (
          <ClipLoader
            color="#36D7B7"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
          />
        ) : (
          foodCat.length > 0 ? (
            foodCat.map((data) => (
              <div key={data._id} className='row mb-3'>
                <div className='fs-3 m-3 cat_name'>{data.CategoryName}</div>
                <hr />
                {foodData
                  .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())))
                  .map((filterItems) => (
                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                     { console.log("filterItem", filterItems)
                     
                     }
                      <Cards foodItem={filterItems} options={filterItems.options[0]}/>
                    </div>
                  ))}
              </div>
            ))
          ) : (
            <p>No data available</p>
          )
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
