import * as React from "react";
import Form, { useForm } from "@/components/Form";
import Field from "@/components/Form/InputField";
import Select from "@/components/Form/Select";
import Button from "../UI/Button";
import { ApplyForm, FeildHolder } from "./InformationForm.styles";
import Grid from "@/components/Grid";
import GridCol from "@/components/GridCol";

function InformationForm() {
  const [form] = useForm();

  const onSubmit = (values) => {
    console.log({ values });
  };

  return (
    <ApplyForm>
      <div className="container">
        <Form from={form} onSubmit={onSubmit}>
          <FeildHolder>
            <div className="header">
              <strong className="heading">Personal Information</strong>
            </div>
            <Grid md={24} gap={14}>
              <GridCol md={8}>
                <Form.Item
                  lg
                  label="First Name"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  rules={[
                    { required: true, message: "Please enter Name" },
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
              </GridCol>
              <GridCol md={8}>
                <Form.Item
                  lg
                  label="Middle Name"
                  type="text"
                  name="middle_name"
                  placeholder="Middle Name"
                  rules={[
                    { required: true, message: "Please enter Name" },
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
              </GridCol>
              <GridCol md={8}>
                <Form.Item
                  lg
                  label="Last Name"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  rules={[
                    { required: true, message: "Please enter Name" },
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
              </GridCol>
              <GridCol md={24}>
                <Form.Item
                  lg
                  options={[{ value: "Value", label: "Label" }]}
                  isSearchable
                  name="emboss"
                  label="Emboss"
                  placeholder="Select how your name should appear on your card"
                  rules={[
                    {
                      required: true,
                      message:
                        "Name that should be on the card should be selected",
                    },
                  ]}
                >
                  <Select />
                </Form.Item>
              </GridCol>
              <GridCol md={12}>
                <Form.Item
                  lg
                  label="Email"
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
              </GridCol>
              <GridCol md={12}>
                <Form.Item
                  lg
                  label="Phone Number"
                  name="phone_number"
                  placeholder="Phone Number"
                  rules={[
                    { required: true, message: "Please enter Name" },
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
              </GridCol>
              <GridCol md={12}>
                <Form.Item
                  lg
                  label="Date Of Birth"
                  name="date_of_birth"
                  placeholder="YYYY-MM-DD"
                  rules={[
                    { required: true, message: "Please enter Name" },
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
              </GridCol>
              <GridCol md={12}>
                <Form.Item
                  lg
                  label="Social Insurance Number"
                  name="phone_number"
                  placeholder="Phone Number"
                  rules={[
                    { required: true, message: "Please enter Name" },
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
              </GridCol>
              <GridCol md={12}>
                <Form.Item
                  lg
                  label="Why Do You Want The Card"
                  name="want_the_card"
                  placeholder="Why Do You Want The Card"
                  rules={[
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
              </GridCol>
              <GridCol md={12}>
                <Form.Item
                  lg
                  label="How Did You Hear About Us?"
                  name="phone_number"
                  placeholder="Phone Number"
                  rules={[
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
              </GridCol>
            </Grid>
          </FeildHolder>

          <FeildHolder>
            <div className="header">
              <strong className="heading">Address</strong>
            </div>
            <Grid md={24} gap={14}>
              <GridCol md={24}>
                <Form.Item
                  lg
                  options={[{ value: "Value", label: "Label" }]}
                  isSearchable
                  label="Street Address"
                  name="street_address"
                  placeholder="Street Address"
                  rules={[
                    {
                      required: true,
                      message:
                        "Name that should be on the card should be selected",
                    },
                  ]}
                >
                  <Select />
                </Form.Item>
              </GridCol>
            </Grid>
          </FeildHolder>

          <FeildHolder>
            <div className="header">
              <strong className="heading">Employment Information</strong>
            </div>
            <Grid md={24} gap={14}>
              <GridCol md={24}>
                <Form.Item
                  lg
                  options={[{ value: "Value", label: "Label" }]}
                  isSearchable
                  label="Employment Status"
                  name="employment_status"
                  placeholder="Employment Status"
                  rules={[
                    {
                      required: true,
                      message:
                        "Name that should be on the card should be selected",
                    },
                  ]}
                >
                  <Select />
                </Form.Item>
              </GridCol>
            </Grid>
          </FeildHolder>

          <FeildHolder>
            <div className="header">
              <strong className="heading">Financial Information</strong>
            </div>
            <Grid md={24} gap={14}>
              <GridCol md={12}>
                <Form.Item
                  lg
                  label="Credit Limit"
                  name="credit_limit"
                  placeholder="Credit Limit"
                  rules={[
                    { required: true, message: "Please enter Credit Limit" },
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
              </GridCol>
              <GridCol md={12}>
                <Form.Item
                  lg
                  label="Annual Income Before Taxes"
                  name="annual_income"
                  placeholder="Annual Income Before Taxes"
                  rules={[
                    { required: true, message: "Please enter Name" },
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
              </GridCol>

              <GridCol md={12}>
                <Form.Item
                  lg
                  label="Other Household Income Before Taxes"
                  name="household_income"
                  placeholder="Other Household Income Before Taxes"
                  rules={[
                    { required: true, message: "Please enter Name" },
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
              </GridCol>
              <GridCol md={12}>
                <Form.Item
                  lg
                  label="Do you have a Mortgage?"
                  name="mortgage"
                  placeholder="Phone Number"
                  rules={[
                    { required: true, message: "Please enter Name" },
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
              </GridCol>

              <GridCol md={12}>
                <Form.Item
                  lg
                  label="Monthly Rent/Mortgage (Optional)"
                  name="monthly_rent/mortgage"
                  placeholder="Monthly Rent/Mortgage (Optional)"
                  rules={[
                    { message: "Please enter Here" },
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
              </GridCol>
              <GridCol md={12}>
                <Form.Item
                  lg
                  label="Referral Code"
                  name="referral_code"
                  placeholder="Referral Code"
                  rules={[
                    { message: "Please enter Code" },
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
              </GridCol>
            </Grid>
          </FeildHolder>
          <div className="btn-holder">
            <Button className="btn-submit" rounded width="236" type="primary">
              Submit Application
            </Button>
          </div>
        </Form>
      </div>
    </ApplyForm>
  );
}

export default InformationForm;
