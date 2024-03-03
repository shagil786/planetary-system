import { useContext, useEffect, useState } from "react";
import { Container, Planet } from "./KeyVisualStyles";
import { Context } from "../../utils/Context";
import { formatData } from "../../utils/formatData";
import Planets from "./Planets";
import styles from "./Planet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const KeyVisual = ({ activePlanet }) => {
  const [planets, setPlanets] = useState([]);
  const { leftIcon, rightIcon } = styles;
  const { appData, setAppData } = useContext(Context);

  useEffect(() => {
    setPlanets(appData?.planetsDetails?.results);
  }, [appData]);

  function pageChange(page) {
    setAppData((prevData) => ({
      ...prevData,
      page: page,
    }));
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 6,
      rotate: "-40deg",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { delay: 1, duration: 3 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      rotate: "-10deg",
      transition: { duration: 1 },
    },
  };

  return (
    <>
      {appData?.page < 6 && (
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          className={leftIcon}
          onClick={() =>
            pageChange((appData?.page + 1) % appData?.planetsDetails?.count)
          }
        />
      )}
      <Container
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {planets?.map((each, index) => (
          <Planet
            key={`${each?.name}_${index}`}
            to={formatData(each.name)}
            aria-label={`${each.name} page`}
            $isActive={activePlanet === formatData(each.name)}
            $planetColor={each.sectionColor}
            children={<Planets data={each} />}
          />
        ))}
      </Container>
      {appData?.page > 1 && (
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          className={rightIcon}
          onClick={() =>
            pageChange((appData?.page - 1) % appData?.planetsDetails?.count)
          }
        />
      )}
    </>
  );
};

export default KeyVisual;
