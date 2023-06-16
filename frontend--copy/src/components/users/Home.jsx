import React, { Fragment, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Jumbotron from "../cards/Jumbotron";
import { ProductsRequest } from "../../apiRequest/ApiRequest";
import { BASE_URL } from "../../helper/config";
import { SuccessToast } from "../../helper/FormHelper";
import { setCartData } from "../../helper/SessionHelper";
const Home = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
    setCartData([...cart,item]);
    SuccessToast("Added to cart");
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await ProductsRequest();
      setProducts(res);
    })();
  }, []);
  return (
    <Fragment>
      <Jumbotron title="Hello World" sutTitle="Welcome to React E-commerce" />

      <div className="row">
        <div className="col-md-12">
          <div className="container-fluid py-4 ">
            <div className="row  d-flex justify-content-center align-content-center">
              {products ? (
                products.map((item, i) => {
                  return (
                    <div className="col-lg-3 col-md-4 col-sm-6 p-3">
                      <div className="card p-3">
                        <img
                          className="card-img-top"
                          src={`${BASE_URL}/productPhoto/${item._id}`}
                          alt={item.name}
                        />
                        <div className="my-2 d-flex justify-content-between">
                          <h4 className="card-link">{item.title}</h4>
                          <h5 className="card-link">{item.price}</h5>
                        </div>
                        <div className="">
                          <p>{item.description.slice(0, 30)}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <NavLink
                            to={`/product/${item._id}`}
                            className=" btn btn-success"
                          >
                            View Details
                          </NavLink>
                          {item.quantity > 0 ? (
                            <button
                              onClick={() => addToCart(item)}
                              className="btn btn-success"
                            >
                              Add to Cart
                            </button>
                          ) : (
                            <button className="btn btn-success">
                              Stock Out
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div></div>
              )}
            </div>
            <div class="col-md-4 col-sm-6"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
