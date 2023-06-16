import React, { Fragment, useEffect, useState } from "react";
import { getCartData, getToken, setCartData } from "../../helper/SessionHelper";
import { BASE_URL } from "../../helper/config";

const Cart = () => {
  // useEffect(() => {
  //   removeFromCart();
  // }, []);



  const cartTotal = () => {
    let total = 0;
    getCartData().map((item) => {
      total += item.price;
    });
    return total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <Fragment>
      <div className="container-fluid bg-lightgray">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-7">
                {getCartData() ? (
                  getCartData().map((item, i) => {
                    return (
                      <div className="card my-5 mx-5">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={`${BASE_URL}/productPhoto/${item._id}`}
                              alt={item.name}
                              className="img-fluid rounded-start w-100 h-100"
                            />
                          </div>
                          <div className="col-md-6">
                            <div className="card-body">
                              <h5 className="card-title">{item.title}</h5>
                              <span className="card-text">
                                {item.description}
                              </span>
                              <span className="card-text">{item.price}</span>
                              <span className="card-text">{item.quantity}</span>
                            </div>
                          </div>
                          <div className="col-md-2">
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div></div>
                )}
              </div>
              <div className="col-md-5">
                <h2 className="text-center p-4">Total Amount</h2>
                <h4>
                  <span>total :</span>
                  <span>{cartTotal()}</span>
                </h4>
                {getToken() > 0 ? (
                  <button className="btn btn-success">Buy</button>
                ) : (
                  <button className="btn btn-success">login</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
