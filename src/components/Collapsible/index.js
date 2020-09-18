import React, { useState } from "react";
import {Icon} from "@components";

const Collapsible = props => {
  const [collapsed, toggleCollapsed] = useState(true);
  const { title, children } = props;

  return (
    <div className={"collapsible " + (!!collapsed ? "" : "is-open ")}>
      <div className="collapsible-header" onClick={() => toggleCollapsed(!collapsed)}>
        {title}
        <Icon name={collapsed ? "keyboard_arrow_down" : "keyboard_arrow_up"} />
      </div>
      <div className="collapsible-panel">{children}</div>
    </div>
  );
};

export default Collapsible;
