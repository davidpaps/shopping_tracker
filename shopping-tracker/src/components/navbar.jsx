import React from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="basket">
        Shopping Basket
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalCounters}
        </span>
      </a>
      <a className="navbar-brand" href="davidpaps">
        Checkout
        <span className="badge badge-pill badge-secondary"></span>
      </a>
    </nav>
  );
};

export default Navbar;
