import Form, { useForm } from "@/components/Form";
import Field from "@/components/Form/InputField";
import Select from "@/components/Form/Select";
import Button from "../UI/Button";
import {
  ApplyForm,
  FeildHolder,
  ImageHolder,
  TextHolder,
} from "./InformationForm.styles";
import Grid from "@/components/Grid";
import GridCol from "@/components/GridCol";
import image01 from "../../../public/reservation_img.jpg";

function InformationForm() {
  const [form] = useForm();

  const onSubmit = (values) => {
    console.log({ values });
  };
  const Starters = [
    { value: "Onion Rings", label: "Onion Rings" },
    { value: "Chicken Pakora", label: "Chicken Pakora" },
  ];
  const Soups = [];
  const TajMahalSpecialities = [];
  const BBQ = [];
  const Rice = [];
  const Desserts = [];
  const Beverages = [];

  return (
    <>
      <ImageHolder style={{ backgroundImage: `url(${image01.src})` }}>
        <div className="container">
          <TextHolder>
            <h1>Reservations</h1>
          </TextHolder>
        </div>
      </ImageHolder>
      <ApplyForm>
        <div className="container">
          <Form form={form} onSubmit={onSubmit}>
            <FeildHolder>
              <Grid md={24} gap={14}>
                <GridCol md={24}>
                  <Form.Item
                    lg
                    label="Your Name"
                    type="text"
                    name="your_name"
                    placeholder="Your Name"
                    rules={[
                      {
                        pattern: /^[a-zA-Z\s]*$/,
                        message: "Your name should be alphabets!",
                      },
                      {
                        pattern: /^[a-zA-Z_ ]{2,}$/,
                        message: "Your Name must be minimum 2 characters.",
                      },
                      {
                        pattern: /^[a-zA-Z_ ]{2,40}$/,
                        message: "Your Name must be maximum 40 characters.",
                      },
                    ]}
                  >
                    <Field />
                  </Form.Item>
                </GridCol>
                <GridCol md={24}>
                  <Form.Item
                    lg
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    rules={[
                      { email: true, message: "Please enter a valid email" },
                      {
                        max: 40,
                        message: "Email should be at max 40 characters!",
                      },
                    ]}
                  >
                    <Field />
                  </Form.Item>
                </GridCol>
                <GridCol md={12}>
                  <Form.Item
                    lg
                    options={Starters}
                    isSearchable
                    isMulti
                    hideSelectedOptions={false}
                    closeMenuOnSelect={false}
                    name="Starters"
                    label="Starters"
                    placeholder="Select Starter"
                  >
                    <Select />
                  </Form.Item>
                </GridCol>
                <GridCol md={12}>
                  <Form.Item
                    lg
                    options={Soups}
                    isSearchable
                    isMulti
                    hideSelectedOptions={false}
                    closeMenuOnSelect={false}
                    name="Soups"
                    label="Soups"
                    placeholder="select an opotion"
                  >
                    <Select />
                  </Form.Item>
                </GridCol>
                <GridCol md={12}>
                  <Form.Item
                    lg
                    options={TajMahalSpecialities}
                    isSearchable
                    isMulti
                    hideSelectedOptions={false}
                    closeMenuOnSelect={false}
                    name="Taj Mahal Specialities"
                    label="Taj Mahal Specialities"
                    placeholder="select an option"
                  >
                    <Select />
                  </Form.Item>
                </GridCol>
                <GridCol md={12}>
                  <Form.Item
                    lg
                    options={BBQ}
                    isSearchable
                    isMulti
                    hideSelectedOptions={false}
                    closeMenuOnSelect={false}
                    name="BBQ"
                    label="BBQ"
                    placeholder="select an option"
                  >
                    <Select />
                  </Form.Item>
                </GridCol>
                <GridCol md={12}>
                  <Form.Item
                    lg
                    options={Rice}
                    isSearchable
                    isMulti
                    hideSelectedOptions={false}
                    closeMenuOnSelect={false}
                    name="Rice"
                    label="Rice"
                    placeholder="select an option"
                  >
                    <Select />
                  </Form.Item>
                </GridCol>
                <GridCol md={12}>
                  <Form.Item
                    lg
                    options={Desserts}
                    isSearchable
                    isMulti
                    hideSelectedOptions={false}
                    closeMenuOnSelect={false}
                    name="Desserts"
                    label="Desserts"
                    placeholder="select an option"
                  >
                    <Select />
                  </Form.Item>
                </GridCol>
                <GridCol md={12}>
                  <Form.Item
                    lg
                    options={Beverages}
                    isSearchable
                    isMulti
                    hideSelectedOptions={false}
                    closeMenuOnSelect={false}
                    name="Beverages"
                    label="Beverages"
                    placeholder="select an option"
                  >
                    <Select />
                  </Form.Item>
                </GridCol>
                <GridCol md={12}>
                  <Form.Item
                    lg
                    label="Select Arrival Time"
                    name="arrival_time"
                    type="time"
                    placeholder="Select Arrival Time"
                  >
                    <Field />
                  </Form.Item>
                </GridCol>
                <GridCol md={12}>
                  <Form.Item
                    lg
                    label="Total Persons"
                    name="total_persons"
                    placeholder="Total Persons"
                  >
                    <Field />
                  </Form.Item>
                </GridCol>
              </Grid>
            </FeildHolder>

            <div className="btn-holder">
              <Button
                className="btn-submit"
                rounded
                width="236"
                type="secondary"
                htmlType="submit"
              >
                Submit Reservation
              </Button>
            </div>
          </Form>
        </div>
      </ApplyForm>
    </>
  );
}

export default InformationForm;
