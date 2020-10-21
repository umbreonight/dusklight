import React, {useState} from "react";
import { Icon } from "@components";

const RevealCard = (props) => {
  const { title, overline, actions, subtitle, image, video, children, className } = props;

  const [showContent, setShowContent] = useState(false);
  return (
    <div className={'card ' + className}>
      <div className="card-image">
        <img src="/static/images/dark-souls-4.jpg" />
      </div>
      <div className="card-content">
        <span className="card-title">
          {title} <Icon name="more_vert" onClick={() => setShowContent(true)} className="pull-right"/>
        </span>
      </div>
      {actions}
      {!!children && 
        <div className={'card-reveal' + (!!showContent ? ' is-shown' : '')}>
          <span className="card-title">
            {title} <Icon name="close"  onClick={() => setShowContent(false)} className="pull-right" />
          </span>
          {children}
        </div>
      }
    </div>
  );
};

export default RevealCard;
