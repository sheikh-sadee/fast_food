import React from "react";
import Image from "next/image";
import img01 from "/public/img-72.png";
import { Container } from "../../styles/common";
import { CareerSection, ContentWrap } from "./GrowingTeam.styles";

function GrowingTeam() {
  return (
    <CareerSection>
      <Container data-aos="fade-up" data-aos-offset="300">
        <ContentWrap>
          <div className="text-holder">
            <h1>
              Join our
              <br /> growing team
            </h1>
            <p>
              Take your career to the next level and become a part of the Plastk
              Family!
            </p>
          </div>
          <div className="info-block">
            <div className="img-box">
              <Image src={img01} alt="img description" />
            </div>
            <div className="text-box">
              <p>
                Our team is constantly aiming to achieve the next best thing,
                which gives countless opportunities for personal and
                professional growth. Check out all of our available
                opportunities below to join our growing team!
              </p>
            </div>
          </div>
        </ContentWrap>
      </Container>
    </CareerSection>
  );
}

export default GrowingTeam;
