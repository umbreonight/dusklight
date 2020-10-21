import React from "react";
import {
  SectionTitle,
  ChatHead,
  ChatMessage,
  Card,
  MediaCard,
  Collapsible,
  Media,
  Tile,
} from "@components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import RevealCard from "../../components/RevealCard";

const Components = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Components</h1>
        </div>
        <div className="col-12">
          <SectionTitle title="Tabs" />
        </div>
        <div className="col-12 col-sm-6">
          <Tabs className="tabs">
            <TabList className="tab-list">
              <Tab selectedClassName="active" className="tab">
                Tab 1
              </Tab>
              <Tab selectedClassName="active" className="tab">
                Tab 2
              </Tab>
              <Tab selectedClassName="active" className="tab">
                Tab 3
              </Tab>
            </TabList>

            <TabPanel selectedClassName="active" className="tab-panel">
              <img
                className="responsive"
                src="/static/images/flying-bird.jpg"
              ></img>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                porta tellus et dolor tempor ultricies. Duis condimentum varius
                leo, ut placerat metus suscipit vitae.
              </p>
            </TabPanel>
            <TabPanel selectedClassName="active" className="tab-panel">
              <img
                className="responsive"
                src="/static/images/bluebird.jpg"
              ></img>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                porta tellus et dolor tempor ultricies. Duis condimentum varius
                leo, ut placerat metus suscipit vitae.
              </p>
            </TabPanel>
            <TabPanel selectedClassName="active" className="tab-panel">
              <h4>Hello Tab</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                porta tellus et dolor tempor ultricies. Duis condimentum varius
                leo, ut placerat metus suscipit vitae.
              </p>
              <img className="responsive" src="/static/images/osman.jpg"></img>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <SectionTitle title="ChatHead" />
          <ChatHead
            image="/static/images/me.jpg"
            username="Darren van Reenen"
            subtitle="Front End Developer"
          />
        </div>
        <div className="col-12 col-sm-6">
          <SectionTitle title="ChatMessage" />
          <ChatMessage
            image="/static/images/me.jpg"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                porta tellus et dolor tempor ultricies. Duis condimentum varius
                leo, ut placerat metus suscipit vitae."
          />
          <ChatMessage
            className="flipped"
            image="/static/images/me.jpg"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                porta tellus et dolor tempor ultricies. Duis condimentum varius
                leo, ut placerat metus suscipit vitae."
          />
        </div>
        <div className="col-12">
          <SectionTitle title="Cards" />
        </div>
        <div className="col-12 col-sm-4">
          <MediaCard
            image="/static/images/osman.jpg"
            overline="Overline"
            title="MediaCard"
            caption="Date"
          >
            <p>
              Aliqua exercitation excepteur nisi reprehenderit duis velit.
              Laborum est non fugiat ex ea mollit laboris reprehenderit anim.
              Non anim adipisicing nulla est nisi. Reprehenderit et sunt
              adipisicing eu quis fugiat esse aliqua minim qui velit elit
              excepteur. Non ullamco eiusmod minim excepteur eu laborum ut qui
              voluptate.
            </p>
          </MediaCard>
        </div>
        <div className="col-12 col-sm-4">
          <Card title="Card">
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
        <div className="col-12 col-sm-4">
          <RevealCard title="/static/images/bluebird.jpg" title="RevealCard">
            <p>
              Aliqua exercitation excepteur nisi reprehenderit duis velit.
              Laborum est non fugiat ex ea mollit laboris reprehenderit anim.
              Non anim adipisicing nulla est nisi.
            </p>
          </RevealCard>
        </div>
        <div className="col-12">
          <SectionTitle title="Collapsibles" />
        </div>
        <div className="col-12 col-sm-6">
          <Collapsible title="Collapsible">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              porta tellus et dolor tempor ultricies. Duis condimentum varius
              leo, ut placerat metus suscipit vitae.
            </p>
          </Collapsible>
        </div>
        <div className="col-12 col-sm-6">
          <Collapsible title="Collapsible" className="raised">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              porta tellus et dolor tempor ultricies. Duis condimentum varius
              leo, ut placerat metus suscipit vitae.
            </p>
          </Collapsible>
        </div>
        <div className="col-12">
          <SectionTitle title="Media" />
        </div>
        <div className="col-12 col-sm-6">
          <Media image="/static/images/hzd.jpg" title="Horizon Zero Dawn">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              porta tellus et dolor tempor ultricies. Duis condimentum varius
              leo, ut placerat metus suscipit vitae.
            </p>
          </Media>
        </div>
        <div className="col-12 col-sm-6">
          <Media image="/static/images/hzd.jpg" title="Birdie">
            <img src="/static/images/bluebird.jpg"></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              porta tellus et dolor tempor ultricies. Duis condimentum varius
              leo, ut placerat metus suscipit vitae.
            </p>
          </Media>
        </div>
        <div className="col-12">
          <SectionTitle title="Tiles" />
        </div>
        <div className="col-6 col-sm-3">
          <Tile icon="settings" label="Options" />
        </div>
        <div className="col-6 col-sm-3">
          <Tile icon="people" label="Accounts" className="raised" />
        </div>
      </div>
    </div>
  );
};

export default Components;
