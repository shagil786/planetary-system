import "./App.css";
import Provider from "./components/provider/Provider";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import { useLocation, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Context } from "./utils/Context";
import { getAllPlanteryData } from "./utils/api";
import Planets from "./pages/Planets/Planets";
import KeyVisual from "./components/KeyVisual/KeyVisual";
import { formatData } from "./utils/formatData";

function App() {
  const location = useLocation();
  const [activePlanet, setActivePlanet] = useState("/");
  const [appData, setAppData] = useState({ page: 1 });

  useEffect(() => {
    getAllPlanteryData(
      "https://swapi.dev/api/planets/?format=json",
      appData?.page,
    )
      .then((res) => {
        setAppData((prevData) => ({
          planetsDetails: { ...(prevData.planetsDetails ?? []), ...res },
          page: appData?.page,
        }));
      })
      .catch((err) => {
        setAppData({ ...appData });
      });
  }, [appData?.page]);

  return (
    <Context.Provider
      value={{
        appData,
        setAppData,
      }}
    >
      <Provider>
        <Wrapper>
          <Navbar
            pathName={location?.pathname}
            onHover={setActivePlanet}
            activePlanet={activePlanet}
          />
          <AnimatePresence>
            <Routes location={location} key={location?.key}>
              <>
                {appData?.planetsDetails?.results?.map((each, index) => {
                  return (
                    <Route
                      exact
                      path={`/${formatData(each.name)}`}
                      key={`${formatData(each.name)}_${index}`}
                      element={<Planets data={each} />}
                    />
                  );
                })}
                <Route
                  exact
                  path="/"
                  element={<KeyVisual activePlanet={activePlanet} />}
                />
              </>
            </Routes>
          </AnimatePresence>
        </Wrapper>
      </Provider>
    </Context.Provider>
  );
}

export default App;
