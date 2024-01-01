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
import bbq1 from "../../../public/bbq1.jpg";
import bbq2 from "../../../public/bbq2.jpg";
import bbq3 from "../../../public/bbq3.jpg";
import bbq4 from "../../../public/bbq4.jpg";
import bbq5 from "../../../public/bbq5.jpg";
import bbq6 from "../../../public/bbq6.jpg";
import taj1 from "../../../public/taj1.jpg";
import taj2 from "../../../public/taj2.jpg";
import taj3 from "../../../public/taj3.jpg";
import taj6 from "../../../public/taj6.jpg";
import taj4 from "../../../public/taj4.png";
import taj5 from "../../../public/taj5.png";
import ic1 from "../../../public/ic1.png";
import ic2 from "../../../public/ic2.png";
import ic3 from "../../../public/ic3.jpg";
import ic4 from "../../../public/ic4.jpg";
import ic5 from "../../../public/ic5.jpg";
import ic6 from "../../../public/ic6.jpg";
import ic7 from "../../../public/ic7.jpg";
import ic8 from "../../../public/ic8.jpg";
import ic9 from "../../../public/ic9.jpg";
import ic10 from "../../../public/ic10.png";
import naan1 from "../../../public/naan1.jpg";
import naan2 from "../../../public/naan2.png";
import naan3 from "../../../public/naan3.jpg";
import naan4 from "../../../public/naan4.jpg";
import naan5 from "../../../public/naan5.jpg";
import naan6 from "../../../public/naan6.png";
import p1 from "../../../public/p1.jpg";
import p2 from "../../../public/p2.jpg";
import p3 from "../../../public/p3.png";
import p4 from "../../../public/p4.jpg";
import p5 from "../../../public/p5.png";
import p6 from "../../../public/p6.png";
import piz1 from "../../../public/piz1.png";
import piz2 from "../../../public/piz2.png";
import piz3 from "../../../public/piz3.png";
import piz4 from "../../../public/piz4.png";
import piz5 from "../../../public/piz5.png";
import piz6 from "../../../public/piz5.png";
import piz7 from "../../../public/piz7.png";
import piz8 from "../../../public/piz8.png";
import seekh from "../../../public/seekh.png";
import kid1 from "../../../public/kid1.png";
import kid2 from "../../../public/kid2.png";
import kid3 from "../../../public/kid3.jpg";
import pas1 from "../../../public/pas1.png";
import pas2 from "../../../public/pas2.png";
import des1 from "../../../public/gulab.jpeg";
import des2 from "../../../public/halwa.jpeg";
import des3 from "../../../public/kheer.jpeg";
import des4 from "../../../public/rusgula.jpeg";
import des5 from "../../../public/molten.jpeg";
import mango from "../../../public/mangolassi.jpeg";
import mint from "../../../public/mint.jpeg";
import annanas from "../../../public/ananas.jpeg";
import lemon from "../../../public/lemon.jpeg";
import orange from "../../../public/orange.jpeg";
import rhoafza from "../../../public/rhoafza.jpeg";
import beefBiryani from "../../../public/beefBiryani.jpeg";
import chickenBiryani from "../../../public/chickenBiryani.jpeg";
import masalaRice from "../../../public/masalaRice.jpeg";
import eggRice from "../../../public/eggChicken.jpeg";
import  mixVeggi from "../../../public/mixVeggi.jpeg";
import plain from "../../../public/plainRice.jpeg";

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
      label: "Taj Mahal Veggi Mix",
      content: (
        <>
          <MenuItemCard
            heading="Mix Veggi Curry"
            price="7,99€"
            paragraph="Um presente para os veganos do Taj Mahal desfrutarem dos melhores sabores das especiarias indianas com toque Veggi. O curry de mistura vegetariana muito popular e muito saboroso vai fazer você dizer “Incrível”. É servido arroz cozido simples."
            img={taj1}
          />
          <MenuItemCard
            heading="Taj Mehal Specialities Aloo Curry"
            price="7,99€"
            paragraph="O curry de batata é o prato mais prático e fácil de fazer em casa. Quase todo mundo come no almoço ou no café da manhã também. Servido arroz cozido simples."
            img={taj2}
          />
          <MenuItemCard
            heading="Palak Paneer"
            price="7,99€"
            paragraph="Espinafre com requeijão, é uma experiência de lamber os dedos, é tão gostoso que com certeza da próxima vez você comerá de novo. É servido arroz cozido simples."
            img={taj3}
          />
          <MenuItemCard
            heading="Naan Chanay"
            price="7,99€"
            paragraph="Pão naan com grão de bico branco é uma combinação perfeita, do jeito que os indianos fazem o grão de bico branco que ninguém mais faz. É o café da manhã, almoço e jantar mais popular também. É servido arroz cozido simples. Abaixo a imagem mostrará o quanto eles são populares."
            img={taj4}
          />
          <MenuItemCard
            heading="Daal CHAWAL"
            price="7,99€"
            paragraph="Lentilhas servidas com arroz cozido e salada como acompanhamento."
            img={taj5}
          />
          <MenuItemCard
            heading="Daal Makhni 7,99€"
            price="7,99€"
            paragraph="Lentilha servida com manteiga, óleo de alho e temperos de sementes de pimenta vermelha, pimenta verde e mistura de temperos 4 King com cobertura de creme e servida arroz cozido simples."
            img={taj6}
          />
        </>
      ),
    },
    {
      label: "BBQ",
      content: (
        <>
          <MenuItemCard
            heading="Tandoori Leg Piece"
            price="4,99€"
            paragraph="  Marinado com especiarias Tandoori e iogurte e cozido no forno Tandoor, este maravilhoso e delicioso pedaço de coxa de frango é servido com molho verde e tomate."
            img={bbq1}
          />
          <MenuItemCard
            heading="Chicken Malai Boti"
            price="9,99€"
            paragraph="Pequenos pedaços finos de frango desossados, marinados por cerca de 18 horas na geladeira, e temperados com algumas ervas, creme de leite fresco, iogurte e preparados no forno Tandoor, esse milagre do churrasco se chama Malai Boti. Que será servido arroz cozido simples."
            img={bbq2}
          />
          <MenuItemCard
            heading="Tandoori Tikka"
            price="9,99€"
            paragraph="Frango Tandoori Tikka é um churrasco indiano muito popular, marinado com Tandoori Masala e algumas ervas. Também é servido arroz cozido simples e molho de iogurte de menta."
            img={bbq3}
          />
           <MenuItemCard
            heading="Chicken IRANI Boti"
            price="9,99€"
            paragraph="Frango O conceito IRANI Boti chegou à Índia com os imigrantes do Irã há séculos. Esses pedaços de frango para churrasco são marinados com temperos suaves e servidos arroz cozido simples."
            img={bbq4}
          />
           <MenuItemCard
            heading="Chicken and Beef Seekh Kebab"
            price="8,99€"
            paragraph="Picados de Frango ou Carne são marinados com cebola picada, gengibre e pasta de alho e amassados com temperos, colados nos espetos e assados no forno tandoor, servidos arroz cozido simples."
            img={bbq5}
          />
           <MenuItemCard
            heading="Chicken Cheese Boti"
            price="9,99€"
            paragraph="Frango de churrasco e marinado com queijo é uma super combinação. Esses pedaços de frango são servidos arroz cozido simples."
            img={bbq6}
          />
        </>
      ),
    },
    {
      label: "Special Indian Curries",
      content: (
        <>
          <MenuItemCard
            heading="Butter Chicken"
            price="9,99€"
            paragraph="Butter Chicken é a mistura de tomate fresco, cebola, alho, gengibre, pimenta verde, castanha de caju e creme de leite fresco, o curry tem frango grelhado desossado e é servido arroz cozido simples."
            img={ic1}
          />
          <MenuItemCard
            heading="Mango Chicken"
            price="9,99€"
            paragraph="Quando se trata de Manga toda a Índia fica louca por ela, essa fruta é uma dádiva do verão e a Índia produz mais de 75 tipos diferentes de manga, milhares de petiscos e pratos são preparados a partir do Rei das frutas que é a Manga. O restaurante Taj Mahal traz para você seu prato mais exclusivo chamado Mango Chicken, que é um curry feito com diversos temperos e polpa de manga e é servido arroz cozido simples."
            img={ic2}
          />
          <MenuItemCard
            heading="Chicken Karahi"
            price="9,99€"
            paragraph="A culinária caseira mais popular da Índia é o Chicken Karahi, um prato de frango muito simples com pasta de tomate, alho, gengibre, iogurte e creme. Servido arroz cozido simples."
            img={ic3}
          />
          <MenuItemCard
            heading="Aachari Chicken"
            price="9,99€"
            paragraph="O frango especial feito com tempero de picles e aquecido com óleo de palma e misturado com iogurte branco desnatado, é uma das principais opções de restaurantes da Índia. Servido arroz cozido simples."
            img={ic4}
          />
          <MenuItemCard
            heading="Chicken Jalfrezi"
            price="9,99€"
            paragraph="Frango Jalfrezi, o frango com um toque de temperos indo chineses, feito de pimentão e tomate, no fogo de 180 graus. Servido arroz cozido simples."
            img={ic5}
          />
          <MenuItemCard
            heading="White Creamy Chicken"
            price="9,99€"
            paragraph="O frango especial feito com tempero de picles e aquecido com óleo de palma e misturado com iogurte branco desnatado, é uma das principais opções de restaurantes da Índia. Servido arroz cozido simples."
            img={ic6}
          />
          <MenuItemCard
            heading="Lamb HANDI"
            price="11,99€"
            paragraph="cordeiro é um símbolo de status na Índia e até no Paquistão. Por ser mais cara de comprar em comparação com outras carnes e ainda assim ser cheia de proteínas e rica em sabor, a carne de cordeiro tem que ser muito marinada e cozida no vapor para que possa cozinhar e tirar o melhor proveito dela. O Taj Mahal traz um dos melhores do Lamb Handi com uma receita mais autêntica. O curry é feito a partir de uma mistura de 10 especiarias e diversas vegetais e frutas secas. é servido arroz cozido simples."
            img={ic7}
          />
          <MenuItemCard
            heading="Lamb Karahi"
            price="11,99€"
            paragraph="Cordeiro é um símbolo de status na Índia e até no Paquistão. Por ser mais cara de comprar em comparação com outras carnes e ainda assim ser cheia de proteínas e rica em sabor, a carne de cordeiro tem que ser muito marinada e cozida no vapor para ficar macia no cozimento e tirar o melhor proveito dela. Taj Mahal traz um dos melhores do Lamb Karahi. O curry é feito de pasta de tomate, iogurte e 12 especiarias. É servido arroz cozido simples."
            img={ic8}
          />
          <MenuItemCard
            heading="Beef Karahi"
            price="11,99€"
            paragraph="A receita do karahi de carne bovina é semelhante à do cordeiro, pois ambas as carnes levam muito tempo para serem macias. A carne é primeiro cozida no vapor e depois frita no curry de purê de batata e iogurte e depois guarnecida com gengibre por cima. Os portugueses são amantes de carne bovina e com certeza adorariam este curry. É servido também arroz cozido simples."
            img={ic9}
          />
          <MenuItemCard
            heading="Palak Chicken"
            price="8,99€"
            paragraph="Espinafre com frango e temperos é uma combinação muito popular de vegetais e carne no restaurante. Tem um sabor mais que delicioso e é servido arroz cozido simples."
            img={ic10}
          />
        </>
      ),
    },
    {
      label: "Naan Breads",
      content: (
        <>
          <MenuItemCard
            heading="Plain Naan "
            price="1€"
            img={naan1}
          />
          <MenuItemCard
            heading="Sesame Naan"
            price="1,50€"
            img={naan2}
          />
          <MenuItemCard
            heading="Butter Naan"
            price="1,50€"
            img={naan3}
          />        
          <MenuItemCard
            heading="Zeera Naan"
            price="1,50€"
            img={naan4}
          />
          <MenuItemCard
            heading="Garlic Naan"
            price="2€"
            img={naan5}
          />
          <MenuItemCard
            heading="Cheese Naan"
            price="3,50€"
            img={naan6}
          />
        </>
      ),
    },
    {
      label: "Parathas",
      content: (
        <>
          <MenuItemCard
            heading="PURI PARATHA"
            price="1,50€"
            img={p1}
          />
          <MenuItemCard
            heading="Plain Paratha"
            price="1,50€"
            img={p2}
          />
          <MenuItemCard
            heading="Aloo Paratha"
            price="3,50€"
            img={p3}
          />
          <MenuItemCard
            heading="Nutella Paratha"
            price="4,00€"
            img={p4}
          />
          <MenuItemCard
            heading="Chicken Paratha Roll"
            price="6€"
            img={p5}
          />
          <MenuItemCard
            heading="Veggi Paratha Roll"
            price="6€"
            img={p6}
          />
        </>
      ),
    },
    {
      label: "Pizza Indiano",
      content: (
        <>
          <MenuItemCard
            heading="Indian Margarita Special M/L"
            price="4,99€/7,99€ "
            img={piz1}
          />
          <MenuItemCard
            heading="Chicken Tikka Pizza M/L"
            price="5,99€/10,99€"
            img={piz2}
          />
          <MenuItemCard
            heading="Chicken Malai Boti Pizza M/L"
            price="5,99€/10,99€"
            img={piz3}
          />
          <MenuItemCard
            heading="Turkish Kebab Pizza M/L"
            price="5,99€/10,99€"
            img={piz4}
          />
          <MenuItemCard
            heading="Dancing Fruit Pizza M/L"
            price="5,99€/10,99€"
            img={piz5}
          />
          <MenuItemCard
            heading="Seekh Kebab Pizza M/L"
            price="5,99€/10,99€"
            img={seekh}
          />
          <MenuItemCard
            heading="Mix Fish Special Pizza M/L"
            price="5,99€/10’99€"
            img={piz7}
          />
          <MenuItemCard
            heading="Mumbai Special Veggi Pizza M/L"
            price="5,99€/10,99€"
            img={piz8}
          />
          
        </>
      ),
    },
    {
      label: "Kids Menu",
      content: (
        <>
          <MenuItemCard
            heading="Menu 1"
            price="5,99€"
            paragraph="Nuggets + Fries + Drink"
            img={kid1}
          />
          <MenuItemCard
            heading="Menu 2"
            price="5,99€"
            paragraph="Chicken Burger + Fries + Drink"
            img={kid2}
          />
          <MenuItemCard
            heading="Menu 3"
            price="5,99€"
            paragraph="Kids Pizza + Fries + Drink"
            img={kid3}
          />  
        </>
      ),
    },
    {
      label: "Pastas (Massas)",
      content: (
        <>
          <MenuItemCard
            heading="TAJ MAHAL RED SAUCE SPECIAL Chicken PASTA"
            price="6,50€"
            img={pas1}
          />
          <MenuItemCard
            heading="Taj Mahal white sauce special Chicken pasta"
            price="6,50€"
            img={pas2}
          />
        </>
      ),
    },
    {
      label: "Special Indian Rice",
      content: (
        <>
          <MenuItemCard
            heading="Chicken Biryani"
            price="9,99 €"
            paragraph="Os amantes da comida indiana sabem o que é uma joia Biryani. Uma porção 
            de Arroz de Frango com os mais diferentes sabores e o mais fino sabor. É 
            uma forma de arroz indiano que é totalmente carregado com frango e pasta 
            de diversos vegetais, frutas secas e temperos. A melhor parte do arroz é que 
            você nunca seria capaz de adivinhar que tempero realmente comeu. É 
            servido com Molhos e Salada e Espetada de Batata"
            img={chickenBiryani}
          />
          <MenuItemCard
            heading="Beef Biryani"
            price="9,99€"
            paragraph="Os amantes da comida indiana sabem o que é uma joia Biryani. Uma porção 
            de arroz bovino com os mais diferentes sabores e o mais fino sabor. É uma 
            forma de arroz indiano que é totalmente carregado com carne bovina e 
            pasta de diversos vegetais, frutas secas e temperos. A melhor parte do arroz 
            é que você nunca seria capaz de adivinhar que tempero realmente comeu. É 
            servido com Molhos e Salada e Espetada de Batata."
            img={beefBiryani}
          />
          <MenuItemCard
            heading="Egg fried Rice with Chicken"
            price="9,99€"
            paragraph="O arroz frito com ovo e frango é um arroz inspirado no sudeste e é muito 
            popular em todos os restaurantes da Índia. Os ingredientes são muito 
            simples e macios como pimenta preta, sal e temperos chineses, todo frango 
            frito e ovos são mesclados com arroz branco para realçar este prato especial."
            img={eggRice}
          />
          <MenuItemCard
            heading="Masala Rice"
            price="9,99€"
            paragraph="É um produto especial da culinária indiana e ainda muito popular entre todas 
            as faixas etárias, as pessoas adoram comê-los, esse arroz vem com ovos 
            cozidos como cobertura com pepino."
            img={masalaRice}
          />
          <MenuItemCard
            heading="Mix Veggi Biryani"
            price="9,99€"
            paragraph=". Os amantes da comida indiana sabem o que é uma jóia Biryani. Uma 
            porção de Arroz Mix veggi com os mais diferentes sabores e o mais fino 
            sabor. É uma forma de arroz indiano totalmente carregado com vegetais e 
            pasta de vegetais diversos, frutas secas e temperos. A melhor parte do arroz 
            é que você nunca seria capaz de adivinhar que tempero realmente pegou. É 
            servido com Molhos e Salada e Kebab de Batata."
            img={mixVeggi}
          />
          <MenuItemCard
            heading="Plain Boiled rice"
            price="2,99 €"
            paragraph="Uma porção de arroz branco basmati cozido importado das terras férteis do 
            Paquistão.
            "
            img={plain}
          />
          
        </>
      ),
    },
    {
      label: "Desserts",
      content: (
        <>
          <MenuItemCard
            heading="Halwa"
            price="3,00€"
            img={des2}
          />  
          <MenuItemCard
            heading="Kheer"
            price="3,50€"
            img={des3}
          />  
          <MenuItemCard
            heading="Ghulab Jamun (2 pieces)"
            price="3,00€"
            img={des1}
          />  
          <MenuItemCard
            heading="Rasgullah (2 pieces)"
            price="3,00€"
            img={des4}
          />  
          <MenuItemCard
            heading="Molten Lava Cake"
            price="5,00€"
            img={des5}
          />     
        </>
      ),
    },
    {
      label: "Natural Beverages",
      content: (
        <>
          <MenuItemCard
            heading="Mango Lassi"
            price="2,99€"
            img={mango}
          />  
          <MenuItemCard
            heading="Mint Margarita"
            price="2,50€"
            img={mint}
          />  
          <MenuItemCard
            heading="Rooh Afza"
            price="2,50€"
            img={rhoafza}
          />  
          <MenuItemCard
            heading="Goa special Ananas Shocker"
            price="2,50€"
            img={annanas}
          />  
          <MenuItemCard
            heading="Lemon Soda"
            price="2,50€"
            img={lemon}
          />  
           <MenuItemCard
            heading="Fresh Orange Juice"
            price="2,50€"
            img={orange}
          />  
        </>
      ),
    },
    {
      label: "Beverages With Gas",
      content: (
        <>
          <MenuItemCard
            heading="Coca Cola"
            price="1,50€"
          />  
          <MenuItemCard
            heading="Coca Cola Zero"
            price="1,50€"
          />  
          <MenuItemCard
            heading="7up / Sprite"
            price="1,50€"
          />  
          <MenuItemCard
            heading="Fanta"
            price="1,50€"
          />  
          <MenuItemCard
            heading="Pedras/Friz sparkling water"
            price="1,50€"
          />  
          <MenuItemCard
            heading="Pedras/Friz Lemon/Passion fruit/Red fruits "
            price="1,50€"
          />  
          <MenuItemCard
            heading="Sumol Ananas/Laranja"
            price="1,50€"
          />  
          <MenuItemCard
            heading="Compal Manga Laranja/Pessego/Pera  "
            price="1,50€"
          />  
          <MenuItemCard
            heading="Agua 0,5l "
            price="1,00€"
          />
          <MenuItemCard
            heading="Agua 1,5l "
            price="2,50€"
          />  
           <MenuItemCard
            heading="Cola/Sprite/Fanta 1l"
            price="3,50€"
          />  
        </>
      ),
    },
    {
      label: "Hot Beverages",
      content: (
        <> 
          <MenuItemCard
            heading="Café"
            price="0,80€"
          />  
          <MenuItemCard
            heading="Abtanado"
            price="1,30€"
          />  
          <MenuItemCard
            heading="Pingo"
            price="1,00€"
          />  
          <MenuItemCard
            heading="Café com Leite "
            price="1,50€"
          />  
          <MenuItemCard
            heading="Galao"
            price="1,50€"
          />  
          <MenuItemCard
            heading="Hot Choclate"
            price="1,80€"
          />  
          <MenuItemCard
            heading="Cha com leite"
            price="1,50€"
          />  
          <MenuItemCard
            heading="Cha"
            price="1,20€"
          />  
        </>
      ),
    },
    {
      label: "Portugal Special",
      content: (
        <> 
          <MenuItemCard
            heading="Cerveja 0.0%"
            price="2,00€"
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
