import CardDetails from "../Card/CardDetails";
import SingleDetails from "../Card/SingleDetails";
import { Illustration, Image } from "./IllustrationStyles";

const IllustrationContainer = ({ planetData, currentData, isChanging }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: "20deg",
      x: 200,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      x: 0,
      transition: { delay: 1, duration: 1.5 },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      rotate: "-20deg",
      x: -200,
      transition: { duration: 1 },
    },
  };
  return (
    <Illustration
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Image
        image={currentData?.image}
        geo={currentData?.geo ? currentData?.geo : false}
        desktopImgWidth={planetData?.desktopImgWidth}
        tabletImgWidth={planetData?.tabletImgWidth}
        mobileImgWidth={planetData?.mobileImgWidth}
        isChanging={isChanging ? true : false}
      >
        {Array?.isArray(currentData) ? (
          currentData?.map((each, index) => (
            <CardDetails
              data={each}
              key={`${each?.name}_${index}`}
              notIncluded={[
                "homeworld",
                "films",
                "vehicles",
                "starships",
                "created",
                "edited",
                "url",
                "species",
                "characters",
                "planets",
              ]}
            />
          ))
        ) : (
          <SingleDetails data={currentData} key={`${currentData?.name}`} />
        )}
      </Image>
    </Illustration>
  );
};

export default IllustrationContainer;
