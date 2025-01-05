import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
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
    subject: `Contact form submission from ${name}`,
    text: `Message from portfolio 'Contact-Form'


          Below are the details:

          Name: ${name}
          Email: ${email}

          
          Here is the message:
          ${message}`,
  };

  const mailOptions2 = {
    from: "shailavmalik684@gmail.com",
    to: email,
    subject: `Thank you for contacting me`,
    text: `Thanks for contacting me (Shailav Malik) for ${subject} throught my portfolio https://shailav-portfolio.vercel.app/.
I will get back to you soon.
Check out my resume attached with this email. You can also download it from here.
    
You can also whatsapp me on +91-9897774657 or email me at 'malikshailav@gmail.com' for any queries or urgent requirements.
     
     
Regards,
Shailav Malik


Find me on socials:
LinkedIn: https://www.linkedin.com/in/shailavmalik/
Github: https://github.com/ShailavMalik/
Twitter: https://x.com/ShailavMalik
Instagram: https://www.instagram.com/shailavmalik1/
     `,
    attachments: [
      {
        filename: "Shailav CV.pdf", // Replace with your file name
        path: "https://github.com/ShailavMalik/Shailav-Portfolio/blob/main/frontend/public/files/Shailav%20CV.pdf", // Replace with your file path
      },
    ],
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
