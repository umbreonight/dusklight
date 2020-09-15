import React, { Fragment } from "react";
import { Loading, Card, ImageCard, RevealCard } from "@components";
import { CardPanel } from "../../components";

const Home = (props) => {
  const { children, loading = false } = props;

  if (!!loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Card />
            <CardPanel />

          </div>
          <div className="col-4">
            <ImageCard />
          </div>
          <div className="col-4">
            <RevealCard />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
