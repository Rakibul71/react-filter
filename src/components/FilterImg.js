import React, { useState } from "react";
import "../components/FilterImg.css";
import Menu from "./menu";

const FilterImg = () => {
  const [items, setItems] = useState(Menu);
  // const filterItem = (catItem) => {
  //   const updatedItems = Menu.filter((curElem) => {
  //     return curElem.category === catItem;
  //   });
  //   setItems(updatedItems);
  // };
  const filterItem = (value) => {
    const updatedItems = Menu.filter((item) => {
      return item.category === value;
    });
    setItems(updatedItems);
  };
  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order your favourite dish
      </h1>
      <hr />
      <div className="menu-tabs container">
        <div>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("evening")}
          >
            Evening
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("dinner")}
          >
            Dinner
          </button>
          <button className="btn btn-warning" onClick={() => setItems(Menu)}>
            All
          </button>
        </div>
      </div>

      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const { id, name, image, description, price } = elem;
                return (
                  <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                    <div className="row Item-inside">
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src={image} alt="menuPic" className="img-fluid" />
                      </div>
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                          <h1>{name}</h1>
                          <p>{description}</p>
                        </div>
                        <div className="menu-price-book">
                          <div className="price-book-divide d-flex justify-content-between">
                            <h2>price : {price}</h2>
                            <a href="#">
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </a>
                          </div>
                          <p>Lorem ipsum dolor adipisicing </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterImg;
