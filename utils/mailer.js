const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
//   auth: {
//     user: process.env.guser,
//     pass: process.env.gpass,
//   },
});

export const sendMail = async (message) => {
  let res = "";
  await transporter
    .sendMail({
      from: '"support" <asadbukhari@personal.dev>', // sender address
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