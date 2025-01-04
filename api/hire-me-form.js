import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions1 = {
    from: process.env.GMAIL_USER,
    to: "malikshailav@gmail.com",
    subject: `Hiring for ${subject}`,
    text: `Message from portfolio 'Hire-me'
          Below are the details:
          Name: ${name}
          Email: ${email}
          Here is the message:
          ${message}`,
  };

  const mailOptions2 = {
    from: "shailavmalik684@gmail.com",
    to: email,
    subject: `Thank you for contacting for ${subject}`,
    text: `Thanks for contacting me (Shailav Malik)...` // Rest of your email text
  };

  try {
    await transporter.sendMail(mailOptions1);
    await transporter.sendMail(mailOptions2);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("error in backend:" + error);
    res.status(500).send("Error sending email");
  }
}