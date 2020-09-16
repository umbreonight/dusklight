import React, { Fragment } from "react";
import { Loading, Banner, Card, UserProfile, ParallaxStars } from "@components";

const Home = (props) => {
  const { loading = false } = props;

  if (!!loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <ParallaxStars title="dusklight" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <Card title="Developer Homebase">
              <UserProfile
                username="Darren van Reenen"
                subtitle="Front End UI Developer"
                image="/static/images/bloodborne.jpeg"
              />
              <p>
                Dusklight is my passion project and working hub. React
                Components are built and tested here and will have websites
                built with Dusklight, a <b>React Front End Component Library</b>
              </p>
            </Card>
          </div>
          <div className="col-12 col-sm-6">
            <Card title="React Components">
              <p>
                Inisi ipsum esse esse aliqua mollit id dolore. Deserunt aliqua
                sunt eiusmod nisi esse est consectetur irure anim incididunt
                Lorem elit ipsum. Nostrud adipisicing amet do excepteur
                consectetur aliqua. Consectetur incididunt eiusmod sit do
                ullamco incididunt reprehenderit pariatur.
              </p>
            </Card>
          </div>
          <div className="col-12 col-sm-6">
            <Card title="SCSS">
              <p>
                Inisi ipsum esse esse aliqua mollit id dolore. Deserunt aliqua
                sunt eiusmod nisi esse est consectetur irure anim incididunt
                Lorem elit ipsum. Nostrud adipisicing amet do excepteur
                consectetur aliqua. Consectetur incididunt eiusmod sit do
                ullamco incididunt reprehenderit pariatur.
              </p>
            </Card>
          </div>
        </div>
      </div>
      <Banner title="dusklight" image="/static/images/dark-souls.jpg" />
    </Fragment>
  );
};

export default Home;
