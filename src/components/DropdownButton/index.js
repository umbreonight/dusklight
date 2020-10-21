import React, { Fragment, useState } from "react";

const DropdownButton = (props) => {

  let {text, icon, children, alignment, className} = props;
  const [dropdownOpen, setDropwdownOpen] = useState(false);

  const toggleDropwdown = () => {
    setDropwdownOpen(!dropdownOpen);
  }

  return (
    <Fragment>
      <button className={"button dropdown-button " + (dropdownOpen ? "is-open" : "") + (className ? className : "")} onClick={toggleDropwdown}>
        {text}
        {icon && (
          <i className={"icon " + alignment}>{icon}</i>
        )}
      </button>
      {children}
    </Fragment>
  );
};

export default DropdownButton;
