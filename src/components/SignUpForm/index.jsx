import * as React from "react";
import Image from "next/image";
import img1 from "../../../public/img-78.png";
import icoFaceBook from "../../../public/facebook-logo.svg";
import icoGoogle from "../../../public/google-logo.svg";
import icoApple from "../../../public/apple-logo.svg";
import { FormBlock, ImgHolder, TextHolder } from "./SignUpForm.styles";
import Form, { useForm } from "@/components/Form";
import Field from "@/components/Form/InputField";
import Link from "next/link";
import Button from "../UI/Button";

function SignUpForm() {
  const [form] = useForm();

  const onSubmit = (values) => {
    console.log({ values });
  };
  return (
    <FormBlock>
      <ImgHolder>
        <Image src={img1} alt="img description" />
      </ImgHolder>
      <TextHolder>
        <div className="header">
          <strong className="title">Create a profile</strong>
          <p>Give yourself some credit, with Plastk.</p>
        </div>
        <Form from={form} onSubmit={onSubmit}>
          <Form.Item
            lg
            type="email"
            name="email"
            placeholder="Email"
            rules={[
              { required: true, message: "Please enter Email" },
              {
                pattern: /^[a-zA-Z\s]*$/,
                message: "First name should be alphabets!",
              },
              {
                pattern: /^[a-zA-Z_ ]{2,}$/,
                message: "First Name must be minimum 2 characters.",
              },
              {
                pattern: /^[a-zA-Z_ ]{2,40}$/,
                message: "First Name must be maximum 40 characters.",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Form.Item
            lg
            type="password"
            name="password"
            placeholder="Password"
            rules={[
              { required: true, message: "Please enter Password" },
              {
                pattern: /^[a-zA-Z\s]*$/,
                message: "First name should be alphabets!",
              },
              {
                pattern: /^[a-zA-Z_ ]{2,}$/,
                message: "First Name must be minimum 2 characters.",
              },
              {
                pattern: /^[a-zA-Z_ ]{2,40}$/,
                message: "First Name must be maximum 40 characters.",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <div className="password-strength">
            <span className="label-text">Password strength</span>
            <ul className="strength-list">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="btn-holder">
            <Button className="btn-submit" width="85" type="primary">
              Continue
            </Button>
            <span className="text">
              Already have an account? <Link href="/">Log In Here!</Link>
            </span>
          </div>
          <div className="or-text">
            <span className="text">or</span>
          </div>
          <div className="socials-btns">
            <button className="btn-social btn-facebook" type="button">
              <Image src={icoFaceBook} alt="facebook" />
              <span className="btn-text">Sign Up with Facebook</span>
            </button>
            <button className="btn-social btn-google" type="button">
              <Image src={icoGoogle} alt="google" />
              <span className="btn-text">Sign Up with Google</span>
            </button>
            <button className="btn-social btn-apple" type="button">
              <Image src={icoApple} alt="apple" />
              <span className="btn-text">Sign Up with Apple</span>
            </button>
          </div>
        </Form>
      </TextHolder>
    </FormBlock>
  );
}

export default SignUpForm;
