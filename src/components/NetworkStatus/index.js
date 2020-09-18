import React, { useState, Fragment } from "react";

const NetworkStatus = (props) => {
  const [isOnline, setIsOnline] = useState(false);

  window.addEventListener("load", () => {
    // 1st, we set the correct status when the page loads
    navigator.onLine ? setIsOnline(true) : setIsOnline(false);

    // now we listen for network status changes
    window.addEventListener("online", () => {
      setIsOnline(true);
    });

    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  });
  return (
    <Fragment>
      <div className={'network-status' + (!!isOnline ? " online" : " offline")}></div>
    </Fragment>
  );
};

export default NetworkStatus;
