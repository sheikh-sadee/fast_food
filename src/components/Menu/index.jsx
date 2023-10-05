import React from "react";

import Link from "next/link";
import Image from "next/image";
import Img1 from "../../../public/food_image_2.jpg";
import starter1 from "../../../public/starter_1.jpg";
import starter2 from "../../../public/starter_2.jpg";
import starter3 from "../../../public/starter_3.jpg";
import starter4 from "../../../public/starter_4.png";
import starter5 from "../../../public/starter_5.png";
import starter6 from "../../../public/starter_6.jpg";
import soup1 from "../../../public/soup_1.png";
import soup2 from "../../../public/soup_2.png";
import soup3 from "../../../public/soup_3.png";
import soup4 from "../../../public/soup_4.png";
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
            heading="Aloo Tikki"
            price="2,99€"
            paragraph="O mais popular e delicioso kebab de batata, uma receita vinda diretamente das ruas da Índia. Feito com purê de batata e 12 deliciosos temperos temperados com cebola picada, gengibre e alho, coberto com ovos e cozido raso em panela de cobre quente."
            img={starter1}
          />
          <MenuItemCard
            heading="Lahori Pakoras"
            price="3,99€"
            paragraph="quando chove em qualquer lugar da Índia, o primeiro pensamento que vem à mente de todos é: vamos comer Pakoras. Eles têm um sabor tão único que você não encontraria algo semelhante a esse tipo em nenhum outro lugar. São feitos com farinha de lentilha, pimenta verde, sal, pimenta vermelha, cebola e coentro."
            img={starter2}
          />
          <MenuItemCard
            heading="Bread Pakoras"
            price="2,99€"
            paragraph="Um dos petiscos populares e mais conhecidos principalmente no estado de Punjab é o Pão Pakora.
            É coberto com massa de lentilhas e recheado com 100% vegetais e frito em óleo de girassol"
            img={starter3}
          />
          <MenuItemCard
            heading="Samosas Chicken/ Veggi."
            price="4,99€/3,99€"
            paragraph="um lanche tipo pirâmide em forma de triângulo, nem mesmo popular na Índia, Paquistão, Afeganistão, Irã, Bangladesh, mas é popular em todo o mundo com diferentes gostos e sabores. Feito com farinha de trigo fresca e recheado com purê de batata e temperos."
            img={starter4}
          />
          <MenuItemCard
            heading="Lahori Fries"
            price="3,99€"
            paragraph="Batatas fritas revestidas com massa de Farinha de lentilhas. Servido com dois molhos. Uma entrada obrigatória Antes de ir para o prato principal."
            img={starter5}
          />
          <MenuItemCard
            heading="Fried Fish "
            price="8,99€"
            paragraph="Filetes de peixe tenros, macios, com cobertura picante e esfarelados, fritos, servidos com salada de repolho e batatas fritas."
            img={starter6}
          />
        </>
      ),
    },
    {
      label: "Soups",
      content: (
        <>
          <MenuItemCard
            heading="Hot and Sour soup"
            price="2,99€"
            paragraph="Hot and Sour Soup é uma sopa popular estilo restaurante da culinária indo chinesa. Como o nome sugere, esta sopa com vegetais ganha sabor picante (picante) com o molho de pimenta e pimenta-do-reino em pó, enquanto o sabor azedo do vinagre."
            img={soup1}
          />
          <MenuItemCard
            heading="Veggi Soup"
            price="2,99€"
            paragraph="uma receita básica de sopa que pode ser adaptada de vegetais frescos. Temperado com algumas especiarias suaves e sal, Sirva com creme fraiche e ervas frescas."
            img={soup2}
          />
          <MenuItemCard
            heading="Chicken corn Soup"
            price="3,50€"
            paragraph="a sopa mais popular da Índia, feita com milho doce fresco e um pouco de frango cozido, é a melhor entrada saudável antes de comer qualquer tipo de alimento."
            img={soup3}
          />
           <MenuItemCard
            heading="Soup Bread Dose with Butter"
            price="1,50€"
            paragraph="pão de manteiga crocante, combinação perfeita com a sopa."
            img={soup4}
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
