import React from "react";
import styles from "./Planet.module.css";

const Planets = ({ data }) => {
  const { containerStyle, mainContent, profileContent, eachCard } = styles;
  return (
    <div className={containerStyle}>
      <h1>{data?.name}</h1>
      <div className={mainContent}>
        <h2>Planet Profile</h2>
        <hr />
        <div className={profileContent}>
          <div className={eachCard}>
            <h4>Rotation Period: </h4>
            <span>{data?.rotation_period}</span>
          </div>
          <div className={eachCard}>
            <h4>Orbital Period: </h4>
            <span>{data?.orbital_period}</span>
          </div>
          <div className={eachCard}>
            <h4>Climate: </h4>
            <span>{data?.climate}</span>
          </div>
          <div className={eachCard}>
            <h4>Gravity: </h4>
            <span>{data?.gravity}</span>
          </div>
          <div className={eachCard}>
            <h4>Population: </h4>
            <span>{data?.population}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planets;
