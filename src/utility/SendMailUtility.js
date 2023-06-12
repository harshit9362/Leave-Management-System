//External Lib Import
const nodemailer = require("nodemailer");

const SendMailUtility = async (emailTo, emailText, emailSubject) => {
  let transporter = await nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      type: "OAuth2",
      user: process.env.AUTH_EMAIL,
      pass: process.env.EMAIL_PASSWORD,
      clientId: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      refreshToken: process.env.AUTH_REFRESH_TOKEN,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOption = {
    from: `${process.env.APPLICATION_NAME} <contact@sujon.one>`,
    to: emailTo,
    subject: emailSubject,
    html: emailText,
  };

  return await transporter.sendMail(mailOption);
};

module.exports = SendMailUtility;
