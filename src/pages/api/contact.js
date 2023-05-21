import nodemailer from "nodemailer";
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    //run the post method
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "deepshikhas472@gmail.com",
        pass: "rjbsmibswsociepm",
      },
    });
    const mailOptions = {
      from: "deepshikhas472@gmail.com",
      to: "plearningcenter17@gmail.com",
    };

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Enquiry form is filled by ${data.firstName} ${data.lastName}`,
        text: `${data.firstName} ${data.lastName}`,
        html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <style>
              * {
                margin: 0;
                padding: 0;
              }
              .rootContainer {
                height:50vh;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: whitesmoke;
                padding-top:12px;
              }
              .container {
                width: 50%;
                height: 90%;
                border: 2px solid rgba(0, 0, 0, 0.3);
                border-radius: 12px;
                padding: 12px;
                box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
                background-color: aliceblue;
                margin-left:20%;
              }
              .name {
                width:100%;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .container p {
                font-size: 18px;
                margin: 4px 0;
              }
            </style>
          </head>
          <body>
            <div class="rootContainer">
              <div class="container">
              <div class="name">
                <h1>${data.firstName} ${data.lastName}</h1>
              </div>
                <p>${data.mobile}</p>
                <p>${data.email}</p>
                <p>
                  ${data.message}
                </p>
              </div>
            </div>
          </body>
        </html>
        `,
      });
      return res.status(200).json({ message: "Data sent successfully...." });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
