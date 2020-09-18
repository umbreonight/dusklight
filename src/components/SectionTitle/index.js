import React, { Fragment } from "react";
import { Icon } from "@components";

const SectionTitle = (props) => {

  let {icon, title, className} = props;
  
  return (
    <div className={'section-title ' + (!!className ? className : "") }>
      {props.icon && <Icon name={props.icon} />}
      {props.title}
    </div>
  );
};

export default SectionTitle;
