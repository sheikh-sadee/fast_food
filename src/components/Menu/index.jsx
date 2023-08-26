import React from "react";
import {
  OurMenuSection,
  SingleMenu,
  PageTitle,
  PageTitleHeading,
  MenuButton,
  MenuTab,
  MenuContent,
  TabLink,
} from "./Menu.styles";

const MenuItem = ({ imgSrc, title, price, description }) => (
  <SingleMenu>
    <img src={imgSrc} alt={title} />
    <MenuContent>
      <h4>
        {title} <span>${price}</span>
      </h4>
      <p>{description}</p>
    </MenuContent>
  </SingleMenu>
);

const OurMenu = () => {
  return (
    <OurMenuSection id="our_menu">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <PageTitle>
              <PageTitleHeading>our menu</PageTitleHeading>
            </PageTitle>
          </div>
        </div>
        <div className="row">
          <MenuTab className="nav nav-tabs menu_tab" id="myTab" role="tablist">
            <li className="nav-item">
              <TabLink className="nav-link active" href="#breakfast" role="tab">
                Breakfast
              </TabLink>
            </li>
            <li className="nav-item">
              <TabLink className="nav-link active" href="#Lunch" role="tab">
                Lunch
              </TabLink>
            </li>
            <li className="nav-item">
              <TabLink className="nav-link active" href="#Dinner" role="tab">
                Dinner
              </TabLink>
            </li>
          </MenuTab>
        </div>
        <div className="row">
          <div className="tab-content col-lg-12" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="breakfast"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-md-6">
                  <MenuItem
                    imgSrc="https://i.imgur.com/kbpceNv.jpg"
                    title="Chicken Burger"
                    price="24"
                    description="Aperiam tempore sit, perferendis numquam repudiandae porro voluptate dicta saepe facilis."
                  />
                </div>
                <div className="col-md-6">
                  <MenuItem
                    imgSrc="https://i.imgur.com/TAq7lDR.jpg"
                    title="Chicken Burger"
                    price="24"
                    description="Aperiam tempore sit, perferendis numquam repudiandae porro voluptate dicta saepe facilis."
                  />
                </div>
              </div>
            </div>
          </div>
          <MenuButton className="menu_btn btn btn-danger" href="#">
            view more
          </MenuButton>
        </div>
      </div>
    </OurMenuSection>
  );
};

export default OurMenu;
