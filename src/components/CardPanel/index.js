import React from "react";

const CardPanel = (props) => {
  const { children, className } = props;

  return (
    <div className={'card-panel ' + className}>
      {children}
    </div>
  );
};

export default CardPanel;
