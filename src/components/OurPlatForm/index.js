import * as React from "react";
import Image from "next/image";
import img01 from "../../../public/macbook-img.png";
import { Container } from "@/styles/common";
import { PlatForm, ImgBox, ListBox } from "./OurPlatForm.styles";

function OurPlatForm() {
  return (
    <PlatForm>
      <Container>
        <div className="header">
          <h2>Our Platform at a Glance</h2>
          <p>
            The Plastk Business Accelerator offer a high level dashboard for all
            of your business promotions and much more...
          </p>
        </div>
        <ImgBox data-aos="fade-up" data-aos-offset="300">
          <Image
            data-aos-anchor-placement="top-bottom"
            src={img01}
            alt="img description"
          />
        </ImgBox>
        <ListBox>
          <div className="box">
            <strong className="title">Stores</strong>
            <p>See all stores in your business</p>
          </div>
          <div className="box">
            <strong className="title">Promotions</strong>
            <p>Create custom promotions</p>
          </div>
          <div className="box">
            <strong className="title">Managers</strong>
            <p>Manager your store & staff</p>
          </div>
          <div className="box">
            <strong className="title">Statements</strong>
            <p>Review billing statements</p>
          </div>
        </ListBox>
      </Container>
    </PlatForm>
  );
}

export default OurPlatForm;
