import React, { Fragment } from "react";
import {
  Loading,
  Banner,
  LoginForm,
  Card,
  FloatingActionButton,
  FlipCard
} from "@components";

const Home = (props) => {
  const { loading = false } = props;

  if (!!loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <FloatingActionButton icon="search" />
      <Banner
        title="Dusklight UI"
        subtitle="React and SCSS Front End UI Kit"
        image="/static/images/dark-souls.jpg"
      />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <Card title="Dusklight UI">
              <p>
                Aliqua exercitation excepteur nisi reprehenderit duis velit.
                Laborum est non fugiat ex ea mollit laboris reprehenderit anim.
                Non anim adipisicing nulla est nisi. Reprehenderit et sunt
                adipisicing eu quis fugiat esse aliqua minim qui velit elit
                excepteur. Non ullamco eiusmod minim excepteur eu laborum ut qui
                voluptate.
              </p>
            </Card>
          </div>
          <div className="col-12 col-sm-6">
            <Card title="React and SCSS">
              <p>
                Aliqua exercitation excepteur nisi reprehenderit duis velit.
                Laborum est non fugiat ex ea mollit laboris reprehenderit anim.
                Non anim adipisicing nulla est nisi. Reprehenderit et sunt
                adipisicing eu quis fugiat esse aliqua minim qui velit elit
                excepteur. Non ullamco eiusmod minim excepteur eu laborum ut qui
                voluptate.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
