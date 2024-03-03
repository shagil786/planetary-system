import PlanetSection from "../../components/PlanetSection/PlanetSection";

const Planets = ({ data, children }) => {
  return <PlanetSection planetData={data}>{children}</PlanetSection>;
};

export default Planets;
