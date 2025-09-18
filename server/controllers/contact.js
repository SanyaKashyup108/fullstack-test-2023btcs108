import Contact from '../models/Contact.js';
import nodemailer from "nodemailer";

export const saveContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    
    const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS, 
  },
});

    
    const mailOptions=({
      from: process.env.GMAIL_USER,
      to: email, 
      subject: `New Contact Message from ${name}`,
       html: `
        <div style="font-family: Arial, sans-serif; background: #fdf6f9; padding: 20px; border-radius: 10px;">
          <h2 style="color: #6B3F69; text-align: center;">📬 New Contact Message</h2>
          <div style="margin-top: 20px; padding: 15px; background: #fff; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="padding: 10px; background: #f3f3f3; border-radius: 5px;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #555; text-align: center;">
            💌 Sent via HealthCare Contact Form
          </p>
        </div>
      `,
    });
    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, message: "Message saved & email sent successfully!" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ 
        success: false, 
        message: "err.massage"
     });
  }
};



















// import nodemailer from "nodemailer";

// export const sendEmail = async (req, res) => {
//    try {
//       const {to, subject, description } = req.body;

//       // Example transporter (Gmail)
//       const transporter = nodemailer.createTransport({
//          service: "gmail",
//          auth: {
//             user: process.env.GMAIL_USER,
//             pass: process.env.GMAIL_PASS, // Use App Password, not Gmail password
//          },
//       });

//       const mailOptions = {
//          from: process.env.GMAIL_USER,
//          // to: process.env.USER_EMAIL ,
//          to,
//          subject,
//          html: `
//     <div style="font-family: Arial, sans-serif; background: #fdf6f9; padding: 20px; border-radius: 10px;">
//       <h2 style="color: #e91e63; text-align: center;">🌸 You've Got Mail 🌸</h2>
//       <p style="font-size: 16px; color: #333;">${description}</p>
      
//       <div style="text-align: center; margin-top: 20px;">
//         <img src="https://cdn.pixabay.com/photo/2017/03/10/21/56/flowers-2136991_960_720.jpg" 
//              alt="Flowers" 
//              style="width: 200px; border-radius: 10px;"/>
//       </div>
      
//       <p style="font-size: 14px; color: #777; text-align: center; margin-top: 20px;">
//         💌 Sent with love using <b>Nodemailer</b>
//       </p>
//     </div>
//   `
//       };


//       await transporter.sendMail(mailOptions);

//       return res.status(200).json({ message: "Email Sent Successfully" });
//    } catch (err) {
//       console.error("Email sending failed:", err);
//       return res.status(500).json({ error: "Failed to send email" });
//    }
// };





