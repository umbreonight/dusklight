import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = ({color="#2196F3", height=40, width=80}) => {
  return (
    <div className="loading">
      <div className="loading-inner">
        <Loader
          type="Bars"
          color={color}
          height={height}
          width={width}
        />
      </div>
    </div>
  );
};

export default Loading;
