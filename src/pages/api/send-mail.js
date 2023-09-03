// import { sendMail } from "../../../utils/mailer";

export default async function handler(req, res) {
  try {
    const payload = JSON.parse(req?.body);
    const {
      name,
      email,
      starters,
      soups,
      tajMahalSpecialities,
      bbq,
      rice,
      dessert,
      beverages,
      time,
      persons,
    } = payload;
    console.log(payload);
    const body = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Reservation Information</title>
        <style>
            /* Add CSS styles here for formatting the email */
            body {
                font-family: Arial, sans-serif;
                background-color: #f5f5f5;
                margin: 0;
                padding: 0;
            }
    
            .header {
                background-image: url('food_banner.jpg'); /* Replace with your food banner image */
                background-size: cover;
                text-align: center;
                color: #fff;
                padding: 40px 0;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
    
            h1 {
                color: #333;
            }
    
            p {
                font-size: 16px;
                line-height: 1.6;
                margin: 0;
            }
    
            strong {
                font-weight: bold;
            }
    
            /* Style for displaying two fields in a single row */
            .row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px; /* Add margin to create spacing */
            }
    
            /* Style for lists */
            ul, ol {
                padding-left: 20px;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>Reservation Information</h1>
        </div>
        <div class="container">
            <p><strong>Your Name:</strong>${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <div class="row">
                <p><strong>Starters:</strong></p>
                <ul>
                ${starters.map((e) => {
                  return `<li>${e}</li>`;
                })}
                </ul>
            </div>
            <div class="row">
                <p><strong>Soups:</strong></p>
                <ul>
                ${soups.map((e) => {
                  return `<li>${e}</li>`;
                })}
                </ul>
            </div>
            <div class="row">
                <p><strong>Tajmahal Specialities:</strong></p>
                <ul>
                ${tajMahalSpecialities.map((e) => {
                  return `<li>${e}</li>`;
                })}
                </ul>
            </div>
            <div class="row">
                <p><strong>BBQ:</strong></p>
                <ul>
                ${bbq.map((e) => {
                  return `<li>${e}</li>`;
                })}
                </ul>
            </div>
            <div class="row">
                <p><strong>Rice:</strong></p>
                <ul>
                ${rice.map((e) => {
                  return `<li>${e}</li>`;
                })}
                </ul>
            </div>
            <div class="row">
                <p><strong>Desserts:</strong></p>
                <ul>
                ${dessert.map((e) => {
                  return `<li>${e}</li>`;
                })}
                </ul>
            </div>
            <div class="row">
                <p><strong>Bevrages:</strong></p>
                <ul>
                ${beverages.map((e) => {
                  return `<li>${e}</li>`;
                })}
            </ul>
        </div>
            <!-- Repeat the same structure for other fields -->
            <p><strong>Select Arrival Time:</strong>${time}</p>
            <p><strong>Total Persons:</strong>${persons}</p>
        </div>
    </body>
    </html>
    
    `;

    // const response = await sendMail(body);

    // if (response.success) {
    //   res.status(200).send({
    //     ...response,
    //   });
    // } else {
    //   throw response;
    // }
  } catch (error) {
    res.status(400).send({
      ...error,
    });
  }
}
