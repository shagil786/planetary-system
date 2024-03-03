import { Tabs, Tab } from "./TabsStyles";

const TabsContainer = ({
  planetData,
  handleClick,
  currentTab,
  windowWidth,
}) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 1 },
    },
  };

  return (
    <Tabs
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Tab
        data-type="overview"
        planetData={planetData}
        onClick={handleClick}
        isActive={currentTab === "overview" ? true : false}
      >
        Overview
      </Tab>
      <Tab
        data-type="population"
        planetData={planetData}
        onClick={handleClick}
        isActive={currentTab === "population" ? true : false}
      >
        population
      </Tab>
      <Tab
        data-type="flims"
        planetData={planetData}
        onClick={handleClick}
        isActive={currentTab === "flims" ? true : false}
      >
        flims
      </Tab>
    </Tabs>
  );
};

export default TabsContainer;
