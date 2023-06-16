import React, { Fragment, useEffect, useState } from "react";
import { getCartData, removeToken } from "../../helper/SessionHelper";
import { Badge } from "antd";
import { NavLink } from "react-router-dom";
const MasterLayout = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    (async () => {
      const cartData = await getCartData();
      setCart(cartData);
    })();
  }, []);

  const onLogout = () => {
    removeToken();
  };
  return (
    <Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <h2>E-commerce</h2>
          </a>

          <Badge
            count={cart?.length >= 1 ? cart.length : 0}
            offset={[-5, 11]}
            showZero={true}
          >
            <NavLink to="/cart" className="nav-link">
              <h4>cart</h4>
            </NavLink>
          </Badge>

          <a onClick={onLogout} className="">
            <span className="">
              <h4>Logout</h4>
            </span>
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default MasterLayout;
