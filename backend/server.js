// Import necessary modules
import express from "express";
import nodemailer from "nodemailer";
import bodyparser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

// Initialize express app
const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware to parse URL-encoded data and JSON data
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// use only in development mode
if (process.env.NODE_ENV === "development") {
  // Enable CORS for requests from http://localhost:3000
  app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "POST",
      credentials: true,
    })
  );
}

// POST route to handle form submissions
app.post("/api/hire-me-form", async (req, res) => {
  // Extract data from the request body
  const { name, email, subject, message } = req.body;
                                                                                                                                                                                                    
  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your email ID from environment variable
      pass: process.env.GMAIL_PASS, // Your email password from environment variable
    },
  });

  // Email options for sending to the portfolio owner
  const mailOptions1 = {
    from: process.env.GMAIL_USER, // Sender address
    to: "malikshailav@gmail.com", // Recipient email ID
    subject: `Hiring for ${subject}`, // Subject line
    text: `Message from portfolio 'Hire-me'

          Below are the details:
          Name: ${name}
          Email: ${email}

          Here is the message:
          ${message}`,
  };

  // Email options for sending to the user or client
  const mailOptions2 = {
    from: "shailavmalik684@gmail.com",
    to: email, // Recepient email ID
    subject: `Thank you for contacting for ${subject}`,
    text: `Thanks for contacting me (Shailav Malik) for ${subject} throught my portfolio https://shailav-portfolio.vercel.app/.

     I will get back to you soon.
     
     You can also contact me on my mobile number: +91-9897774657 or email me at 'malikshailav@gmail.com' for any queries or urgent requirements.
     
      Regards,
      Shailav Malik


      Find me on socials:
      LinkedIn: https://www.linkedin.com/in/shailavmalik/
      Github: https://github.com/ShailavMalik/
      Twitter: https://x.com/ShailavMalik
      Instagram: https://www.instagram.com/shailavmalik1/


     `,
  };

  try {
    // Send email using the transporter
    await transporter.sendMail(mailOptions1);
    await transporter.sendMail(mailOptions2);
    // Send success response
    res.status(200).send("Email sent successfully");
  } catch (error) {
    // Log error and send error response
    console.error("error in backend:" + error);
    res.status(500).send("Error sending email");
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

// Start the server on the specified port or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
