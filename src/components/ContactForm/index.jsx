import * as React from "react";
import { ContactSection, TextHolder, FormHolder } from "./ContactForm.styles";
import Form, { useForm } from "@/components/Form";
import Button from "@/components/UI/Button";
import Field from "@/components/Form/InputField";

function ContactForm() {
  const [form] = useForm();

  const onSubmit = (values) => {
    console.log({ values });
  };

  return (
    <ContactSection>
      <div className="container">
        <TextHolder>
          <div className="text-box">
            <h2>Office Location</h2>
            <address>
              D548 Market Street Edmonton AB 99589 Canada 1-855-485-0102
            </address>
          </div>
          <strong className="heading">We Would Love to hear from you!</strong>
          <p>
            During business hours, you may chat with our team in real-time or
            ask questions to our virtual assistant who is available 24/7
          </p>
          <p>
            Have any questions? Need assistance? Our friendly customer service
            team is ready to help!
          </p>
        </TextHolder>
        <FormHolder>
          <Form from={form} onSubmit={onSubmit}>
            <Form.Item
              borderBottom
              type="text"
              name="first_name"
              placeholder="Your Name"
              rules={[
                { required: true, message: "Please enter first name" },
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
              borderBottom
              type="text"
              name="email"
              placeholder="Your Email"
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
              borderBottom
              type="text"
              name="inquiries"
              placeholder="General Inquiries"
              rules={[
                { required: true, message: "Please enter Inquiries" },
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
              type="textarea"
              borderBottom
              name="message"
              placeholder="Message"
            >
              <Field />
            </Form.Item>
            <Button htmlType="submit" type="white" width={200} rounded>
              Send message
            </Button>
          </Form>
        </FormHolder>
      </div>
    </ContactSection>
  );
}

export default ContactForm;
