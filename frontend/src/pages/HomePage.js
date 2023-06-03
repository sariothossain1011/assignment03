import React, { Fragment, Suspense } from "react";
import Home from "../components/users/Home";
import MasterLayout from "../components/masterLayout/MasterLayout";

const HomePage = () => {
  return (
    <Fragment>
      <MasterLayout/>
      <Home/>
    </Fragment>
  );
};

export default HomePage;
