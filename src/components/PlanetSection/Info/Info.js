import { Info, Item, Heading, Desc } from "./InfoStyles";

const InfoContainer = ({ planetData }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      opacity: 0,
      y: 25,
      transition: { duration: 1 },
    },
  };

  return (
    <Info
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Item>
        <Heading>Rotation Time</Heading>
        <Desc>{planetData.rotation_period}</Desc>
      </Item>
      <Item>
        <Heading>Revolution Time</Heading>
        <Desc>{planetData.orbital_period}</Desc>
      </Item>
      <Item>
        <Heading>Diameter</Heading>
        <Desc>{planetData.diameter}</Desc>
      </Item>
      <Item>
        <Heading>Surface Water.</Heading>
        <Desc>{planetData.surface_water}</Desc>
      </Item>
    </Info>
  );
};

export default InfoContainer;
