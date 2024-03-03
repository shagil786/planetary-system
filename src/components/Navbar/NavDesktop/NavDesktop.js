import { Context } from "../../../utils/Context";
import { formatData } from "../../../utils/formatData";
import { Nav, List, Item, Link } from "./NavDesktopStyles";
import React, { useContext, useEffect, useState } from "react";

const NavDesktop = ({ pathName, activePlanet, onHover }) => {
  const [planets, setPlanets] = useState([]);
  const { appData, setAppData } = useContext(Context);

  useEffect(() => {
    setPlanets(appData?.planetsDetails?.results);
  }, [appData]);

  return (
    <Nav>
      <List>
        {planets?.map((planet, index) => (
          <Item key={`${planet.name}_${index}`}>
            <Link
              to={formatData(planet.name)}
              $bgcolor={planet.color}
              $isActive={
                formatData(planet?.name) === pathName ||
                formatData(planet?.name) === activePlanet
              }
              onMouseOver={() => onHover(formatData(planet?.name))}
              onMouseLeave={() => onHover(false)}
              onFocus={() => onHover(formatData(planet?.name))}
              onBlur={() => onHover(false)}
            >
              {planet.name}
            </Link>
          </Item>
        ))}
      </List>
    </Nav>
  );
};

export default NavDesktop;
