import React, { useState } from "react";

const Footer = (props) => {
  const { openSidenav } = props;
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/library">Library</a>
        <a href="/workbench">Workbench</a>
        <button
          type="button"
          href="/workbench"
          className="button"
          onClick={openSidenav}
        >
          Workbench
        </button>
      </div>
      <div className="footer-copyright">© Copyright 2020</div>
    </footer>
  );
};
export default Footer;
