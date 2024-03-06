import React from 'react';

function Carausal({search,setSearch}) {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-caption w-full" style={{ zIndex: "10" }}>
                    <form className="d-flex justify-content-center">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                        />
                        {/* <button className="btn btn-outline-success text-white" type="submit">
                            Search
                        </button> */}
                    </form>
                </div>
                <div className="carousel-item active">
                    <img
                        src="https://source.unsplash.com/random/900x700/?burger"
                        className="d-block w-100 h-100 "
                        alt="Burger"
                    />
                </div>
                <div className="carousel-item  ">
                    <img
                        src="https://source.unsplash.com/random/900x700/?biscuit"
                        className="d-block w-100 h-100"
                        alt="Cake"
                    />
                </div>
                <div className="carousel-item  ">
                    <img
                        src="https://source.unsplash.com/random/900x700/?grocery"
                        className="d-block w-100 h-100"
                        alt="Soup"
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carausal;
