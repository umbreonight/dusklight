import React from "react";
import { Icon } from "@components";

const Tile = (props) => {
  let { className, icon, label } = props;
  return (
    <div className={"tile " + className}>
      {!!icon && <Icon name={icon} className="icon-48 icon-light" />}
      {!!label && <span className="tile-label">{label}</span>}
    </div>
  );
};

export default Tile;
