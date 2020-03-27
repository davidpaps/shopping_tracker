import React, { Component } from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="davidpaps">
        Shopping Basket
        <span className="badge badge-pill badge-secondary m-2">
          {this.props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

}
export default Navbar;
