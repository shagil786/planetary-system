import React, { useEffect, useState } from "react";
import styles from "./CardDetails.module.css";
import { getAllPlanteryData } from "../../../utils/api";

const CardDetails = ({ data, notIncluded }) => {
  const { cardStyle, eachContainer } = styles;
  const [planetaryData, setPlanetaryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPlanteryData(data, "");
        setPlanetaryData(response);
      } catch (error) {
        console.error("Error fetching planetary data:", error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <div className={cardStyle}>
      {Object.entries(planetaryData ?? {})?.map(([key, value], index) => {
        return (
          !notIncluded.includes(key.replace("_", " ")) && (
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

export default CardDetails;
