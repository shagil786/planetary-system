import React from "react";
import styles from "./CardDetails.module.css";

const SingleDetails = ({ data }) => {
  const { containerStyle, eachContainer } = styles;
  const notIncluded = ["url", "edited", "created", "name"];

  return (
    <div className={containerStyle}>
      {Object.entries(data)?.map(([key, value], index) => {
        return (
          !Array.isArray(value) &&
          !notIncluded.includes(key) && (
            <div className={eachContainer} key={`${key}_${value}_${index}`}>
              <p>
                <span>{key.replace("_", " ")}</span>
                <span>:</span>
              </p>
              <p>{value}</p>
            </div>
          )
        );
      })}
    </div>
  );
};

export default SingleDetails;
