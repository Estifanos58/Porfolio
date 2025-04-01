import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { EMAIL_TEMPLATE } from "../../../../emailTemplate";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

console.log("Email", process.env.NEXT_PUBLIC_EMAIL_USER);

export const POST = async (req: NextRequest) => {
  const { name, email, message }: ContactFormData = await req.json();

  if(!name || !email || !message) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }
  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER, // Your email
      pass: "veeh mkbf irfa vaws", // App password if using Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.NEXT_PUBLIC_EMAIL_USER, // Your receiving email
      subject: `New Contact Message from ${name}`,
      text: message,
      html: EMAIL_TEMPLATE.replace("{name}", name).replace("{email}", email).replace("{message}", message),
    });

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send message", error }, { status: 500 });
  }
}

