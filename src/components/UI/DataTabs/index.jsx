import { useState, useEffect } from "react";
import {
  StyledTabs,
  Wrap,
  StyledTabList,
  StyledTab,
  StyledTabPanels,
  StyledTabPanel,
  ContentHolder,
} from "./DataTabs.styles";

const DataTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMediaQueryChange = (event) => {
      setShouldAutoPlay(event.matches);
    };

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    setShouldAutoPlay(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    let timer;

    if (shouldAutoPlay && !isHovered) {
      timer = setInterval(() => {
        setActiveTab((prevTab) => (prevTab + 1) % data.length);
      }, 3000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [shouldAutoPlay, isHovered, data]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <StyledTabs
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Wrap>
        <StyledTabList>
          {data.map((tab, index) => (
            <StyledTab
              key={index}
              onClick={() => setActiveTab(index)}
              active={activeTab === index}
            >
              {tab.label}
            </StyledTab>
          ))}
        </StyledTabList>
      </Wrap>

      <StyledTabPanels>
        {data.map((tab, index) => (
          <StyledTabPanel key={index} active={activeTab === index}>
            <ContentHolder>{tab.content}</ContentHolder>
          </StyledTabPanel>
        ))}
      </StyledTabPanels>
    </StyledTabs>
  );
};

export default DataTabs;
