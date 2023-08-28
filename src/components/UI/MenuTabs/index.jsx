import { useState, useEffect } from "react"; 
import {
  StyledTabs,
  Wrap,
  StyledTabList,
  StyledTab,
  StyledTabPanels,
  StyledTabPanel,
  ContentHolder,
} from "./MenuTabs.styles";

const DataTabs = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
  }, [tabData]);

  return (
    <StyledTabs
    >
      <Wrap>
        <StyledTabList>
          {tabData.map((tab, index) => (
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
        {tabData.map((tab, index) => (
          <StyledTabPanel key={index} active={activeTab === index}>
            <ContentHolder>{tab.content}</ContentHolder>
          </StyledTabPanel>
        ))}
      </StyledTabPanels>
    </StyledTabs>
  );
};

export default DataTabs;
