import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Header, TopNavigation, Footer, Main, MegaSidenav } from "../Components/Global";

const PicadorDashboard = props => {
  let [sidenavIsOpen, toggleSidenav] = useState(false);

  const openSidenav = () => {
    toggleSidenav(true);
    document.body.classList.add("has-overlay");
  };

  const closeSidenav = () => {
    toggleSidenav(false);
    document.body.classList.remove("has-overlay");

    let navExpand = document.querySelectorAll(".nav-expand");
    navExpand.forEach((item) => {
      item.classList.remove("is-active");
    });
  };

  return (
    <Fragment>
      <Router>
        <TopNavigation />
        {/* <Header handleSidenav={openSidenav} /> */}
        <MegaSidenav sidenavIsOpen={sidenavIsOpen} handleClose={closeSidenav} />
        <Main>{props.children}</Main>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default PicadorDashboard;
