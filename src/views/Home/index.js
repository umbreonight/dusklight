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
          <div className="col-12">
            <h1>dusklight</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
