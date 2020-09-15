import React from "react";

const Icon = ({className, name, onClick}) => {
  return (
    <i className={"icon " + (className || "")} onClick={onClick}>{name}</i>
  );
};

export default Icon;
