const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "sheikh.sadee24@gmail.com",
    pass: "sadee232323",
  },
});

export const sendMail = async (message) => {
  console.log("Message", message);
  let res = "";
  await transporter
    .sendMail({
      from: "sheikh.sadee24@gmail.com", // sender address
      to: "sheikh.sadee24@gmail.com", // list of receivers
      subject: "Reservation", // Subject line
      html: message, // plain text body
    })
    .then((r) => {
      res = { message: "Message Sent Successfully!", success: true };
    })
    .catch((error) => {
      res = { message: error.message, success: false };
    });
  return res;
};
