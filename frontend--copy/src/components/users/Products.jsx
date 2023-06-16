import React, { Fragment } from "react";
import { BASE_URL } from "../../helper/config";

const Products = (props) => {
    // alert(props)
    const item = props
  return (
    <Fragment>
      <figure>
        <img
          className="img-thumbnail h-50"
          src={`${BASE_URL}/productPhoto/${item._id}`}
          alt={item.name}
        />
      </figure>
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <p>{item.quantity}</p>
    </Fragment>
  );
};

export default Products;
