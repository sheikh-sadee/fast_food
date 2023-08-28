import React from "react";

import Link from "next/link";
import Image from "next/image";
import Img1 from "../../../public/food_image_2.jpg";
import DataTabs from "../UI/MenuTabs";
import MenuItemCard from "../MenuItemCard";
import { OurMenuSection, PageTitle } from "./Menu.styles";
import { Container } from "@/styles/common";

const OurMenu = () => {
  const tabData = [
    {
      label: "Starters",
      content: (
        <>
          <MenuItemCard
            heading="Starters"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
          <MenuItemCard
            heading="Starters"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
          <MenuItemCard
            heading="Starters"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
        </>
      ),
    },
    {
      label: "Soups",
      content: (
        <>
          <MenuItemCard
            heading="Soups"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
          <MenuItemCard
            heading="Soups"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
          <MenuItemCard
            heading="Soups"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
        </>
      ),
    },
    {
      label: "Taj Mehal Specialities",
      content: (
        <>
          <MenuItemCard
            heading="Taj Mehal Specialities"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
          <MenuItemCard
            heading="Taj Mehal Specialities"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
          <MenuItemCard
            heading="Taj Mehal Specialities"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
        </>
      ),
    },
    {
      label: "BBQ",
      content: (
        <>
          <MenuItemCard
            heading="BBQ"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
          <MenuItemCard
            heading="BBQ"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
          <MenuItemCard
            heading="BBQ"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
        </>
      ),
    },
    {
      label: "Rice",
      content: (
        <>
          <MenuItemCard
            heading="Rice"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
          <MenuItemCard
            heading="Rice"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
          <MenuItemCard
            heading="Rice"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
        </>
      ),
    },
    {
      label: "Desserts",
      content: (
        <>
          <MenuItemCard
            heading="Desserts"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
          <MenuItemCard
            heading="Desserts"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
          <MenuItemCard
            heading="Desserts"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
        </>
      ),
    },
    {
      label: "Beverages",
      content: (
        <>
          <MenuItemCard
            heading="Beverages"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
          <MenuItemCard
            heading="Beverages"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
          <MenuItemCard
            heading="Beverages"
            price="25"
            paragraph="Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis."
            img={Img1}
          />
        </>
      ),
    },
  ];

  return (
    <OurMenuSection id="our_menu">
      <div className="container">
        <PageTitle>
          <h1>our menu</h1>
        </PageTitle>
        <DataTabs tabData={tabData} />
      </div>
    </OurMenuSection>
  );
};

export default OurMenu;
