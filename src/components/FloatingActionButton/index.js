import React from "react";
import {Icon} from "@components"
const FloatingActionButton = props => {
  let {icon, className="", onClick} = props;
  return (
    <button className={'floating-action-button ' + className} onClick={onClick}>
      <Icon name={icon}/>
    </button>
  );
};

export default FloatingActionButton;
