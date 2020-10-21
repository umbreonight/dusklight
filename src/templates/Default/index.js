import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ScrollToTop, Footer, Sidenav } from "@components";

const Default = ({children}) => {
  return (
    <Fragment>
      <Router>
        <ScrollToTop />
        <main>{children}</main>
      </Router>
      <Footer/>
    </Fragment>
  );
};

export default Default;
