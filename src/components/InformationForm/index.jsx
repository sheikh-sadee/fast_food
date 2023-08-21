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
  const menu = [
    { value: "Chicken Karahi", label: "Chicken Karahi" },
    { value: "Mutton Karahi", label: "Mutton Karahi" },
    { value: "Gola Kabab", label: "Gola Kabab" },
    { value: "Arabian Shawarma", label: "Arabian Shawarma" },
    {
      value: "Achari Handi",
      label: "Achari Handi",
    },
  ];
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
                      { email: true, message: 'Please enter a valid email' },
                      { max: 40, message: 'Email should be at max 40 characters!' },
                    ]}>
                  
                    <Field />
                  </Form.Item>
                </GridCol>
                <GridCol md={24}>
                  <Form.Item
                    lg
                    options={menu}
                    isSearchable
                    isMulti
                    hideSelectedOptions={false}
                    closeMenuOnSelect={false}
                    name="menu"
                    label="Menu"
                    placeholder="Select Menu"
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
              <Button className="btn-submit" rounded width="236" type="secondary"  htmlType="submit">
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
