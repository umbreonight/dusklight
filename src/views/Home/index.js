import React, { Fragment } from "react";

const Home = (props) => {
  const { children, loading = false } = props;

  if (!!loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <div className=""></div>
    </Fragment>
  );
};

export default Home;
