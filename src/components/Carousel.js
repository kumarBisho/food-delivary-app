import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important"}}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success text-white bg-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80"
                className="d-block w-100"
                style={{ filter: "brightness(50%)" }}
                alt="Delicious Food"
            />
            </div>
          {/* <div className="carousel-item">
            <img
              src="C:\Users\BK Yadav\OneDrive\Desktop\FULL_STACK\food_delivary\mern_react_app\src\image\bisho.jpeg"
              className="d-block w-100"
              style={{ filter: "brightness(50%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="C:\Users\BK Yadav\OneDrive\Desktop\FULL_STACK\food_delivary\mern_react_app\src\image\bisho.jpeg"
              className="d-block w-100"
              style={{ filter: "brightness(50%)" }}
              alt="..."
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
