import React from "react";

import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";
const Header = () => {
  return (
    <section className="header">
      <Navbar />
      <HeaderContent />
    </section>
  );
};

export default Header;
