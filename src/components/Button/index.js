import React, { Fragment } from "react";
import {Loading, Icon} from "@components";

const Button = props => {
  const {type, className, onClick, alignment="left", text, icon, disabled=false} = props;
  return (
    <button type={type} className={"button " + (className ? className : "")} onClick={onClick} disabled={disabled}>
      {text}
      {icon && <Icon name={icon} className={alignment}/>}
    </button>
  );
};

export default Button;
