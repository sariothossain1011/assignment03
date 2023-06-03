import React, { Fragment } from "react";
import { Container, Navbar } from "react-bootstrap";
import { getUserDetails, removeSessions } from "../../helper/SessionHelper";

const MasterLayout = () => {
  const onLogout = () => {
    removeSessions();
  };
  return (
    <Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand"><h2>{getUserDetails().name}</h2></a>
          <div className="">

            <a onClick={onLogout} className="">
              <span className=""><h4>Logout</h4></span>
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default MasterLayout;
