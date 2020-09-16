import React, { Fragment } from "react";
import { Loading, Button, Banner, ParallaxStars } from "@components";

const Home = (props) => {
  const { loading = false } = props;

  if (!!loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <ParallaxStars title="dusklight" />
      <Banner title="dusklight" image="/static/images/dark-souls.jpg" />
      <div className="container">
        <div className="row">
          <div className="col-12">
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
