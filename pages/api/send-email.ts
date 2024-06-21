import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Here");
  console.log(process.env.GMAIL_USER);
  console.log(process.env.GMAIL_PASS);
  
  if (req.method === 'POST') {
    const { name, email, company, subject, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    try {
      console.log(process.env.GMAIL_USER);
      
      // Send email
      await transporter.sendMail({
        from: email,
        to: process.env.RECEIVER_EMAIL,
        subject: subject,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Company:</strong> ${company}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });

      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.log(error);
      
      res.status(500).json({ message: 'Error sending message', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
