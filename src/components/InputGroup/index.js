import React, { Fragment } from "react";

const InputGroup = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <div className="input-group">{children}</div>
    </Fragment>
  );
};

export default InputGroup;
