import * as React from "react";
import Image from "next/image";
import img01 from "../../../public/macbook-img.png";
import { Container } from "@/styles/common";
import {
  BusinessBlock,
  RegisterForm,
  TextBox,
  InputBox,
} from "./RegisterBusiness.styles";

function RegisterBusiness({ title, para, bgColor }) {
  return (
    <BusinessBlock>
      <Container>
        <RegisterForm bgColor={bgColor}>
          <TextBox>
            <h4>{title}</h4>
            <p>{para}</p>
          </TextBox>
          <InputBox>
            <input type="email" placeholder="Email Address" />
            <button className="btn" type="submit">
              Register <span>for Free</span>
            </button>
          </InputBox>
        </RegisterForm>
      </Container>
    </BusinessBlock>
  );
}

export default RegisterBusiness;
