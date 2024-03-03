import { useState, useRef } from "react";

const useDataChange = (data) => {
  const [currentData, setCurrentData] = useState(data);
  const [isChanging, setIsChanging] = useState(false);
  const [currentTab, setCurrentTab] = useState("overview");
  const prevTab = useRef("overview");
  const isTransitionend = useRef(true);
  const transitionDuration = 2000;

  /**
   * Function to invoke changeContent() only when given conditions are met.
   * @param    {Event} event    Event from user click on element
   */
  const handleClick = (event) => {
    let currTab = event.target.dataset.type;
    setCurrentData(
      currTab == "overview"
        ? data
        : currTab == "population"
        ? data?.residents
        : data?.films,
    );
    if (!isTransitionend.current || prevTab.current === currTab) return false;

    changeContent(currTab);
  };

  /**
   * Function to change data.
   * @param    {String} currTab    Name of current tab
   */
  const changeContent = (currTab) => {
    prevTab.current = currTab;
    isTransitionend.current = false;
    setIsChanging(true);
    setCurrentTab(currTab);

    setTimeout(() => {
      isTransitionend.current = true;
      setIsChanging(false);
    }, transitionDuration);
  };

  return [handleClick, currentData, currentTab, isChanging];
};

export default useDataChange;
