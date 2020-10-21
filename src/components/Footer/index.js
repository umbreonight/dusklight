import React, { useState } from "react";

const Footer = (props) => {
  const { openSidenav } = props;
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/components">Components</a>
      </div>
      <div className="footer-copyright">Darren van Reenen | 2020</div>
    </footer>
  );
};
export default Footer;
