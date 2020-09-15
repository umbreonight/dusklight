import React, {useState} from "react";
import { Icon } from "@components";

const RevealCard = (props) => {
  const { title, overline, subtitle, image, video, children } = props;

  const [showContent, setShowContent] = useState(false);
  return (
    <div className="card">
      <div className="card-image">
        <img src="/static/images/dark-souls-4.jpg" />
      </div>
      <div className="card-content">
        <span className="card-title">
          Card Title <Icon name="more_vert" onClick={() => setShowContent(true)} className="pull-right"/>
        </span>
      </div>
      <div className="card-actions">
        <a href="#">This is a link</a>
        <a href="#">This is a link</a>
      </div>
      <div className={'card-reveal' + (!!showContent ? ' is-shown' : '')}>
        <span className="card-title">
          Card Title <Icon name="close"  onClick={() => setShowContent(false)} className="pull-right" />
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </div>
  );
};

export default RevealCard;
