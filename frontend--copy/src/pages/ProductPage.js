import React, { Fragment, Suspense } from "react";
import MasterLayout from "../components/masterLayout/MasterLayout";
import Product from "../components/users/Product";
import Jumbotron from "../components/cards/Jumbotron";

const ProductPage = () => {
  return (
    <Fragment>
      <MasterLayout/>
      <Jumbotron title="Hello World" sutTitle="Welcome to React E-commerce"/>
      <Product/>
    </Fragment>
  )
}

export default ProductPage