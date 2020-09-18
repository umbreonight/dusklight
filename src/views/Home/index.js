import React, { Fragment } from "react";
import {
  Loading,
  Banner,
  Card,
  UserProfile,
  ParallaxStars,
  MediaCard,
  Collapsible,
  SectionTitle,
  Button
} from "@components";

const Home = (props) => {
  const { loading = false } = props;

  if (!!loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <ParallaxStars title="dusklight" fixed/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8">
            <SectionTitle title="Components" />
            <div className="button-group">
              <Button text="Button" />
              <Button text="add" icon="add" className="round"/>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <Collapsible title="About">
            <Card>
              <UserProfile
                username="Darren van Reenen"
                subtitle="Front End UI Developer"
                image="/static/images/bloodborne.jpeg"
              />
            </Card>
            </Collapsible>
            
            <MediaCard video="/static/videos/godfall.mp4" title="Godfall">
              <p>
                Anim sit eiusmod ut ea quis consectetur non adipisicing
                incididunt culpa dolor ex. Sunt sunt do deserunt eu laborum id.
                Cupidatat dolor eu deserunt ad veniam.
              </p>
            </MediaCard>
            <MediaCard image="/static/images/dark-souls-3.jpg" title="Dark Souls">
              <p>
                Anim sit eiusmod ut ea quis consectetur non adipisicing
                incididunt culpa dolor ex. Sunt sunt do deserunt eu laborum id.
                Cupidatat dolor eu deserunt ad veniam. Esse eiusmod id fugiat
                sit pariatur magna in Lorem proident sint.
              </p>
            </MediaCard>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
