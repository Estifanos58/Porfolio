import nodemailer from "nodemailer";
import { PASSWORD } from "../../emailTemplate";

export const sendEmail = async (email: string, randomNumber: string) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL_USER, // Your email
            pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // App password if using Gmail
        },
    });

    const mailOptions = {
        from: process.env.NEXT_PUBLIC_EMAIL_USER,
        to: email,
        subject: "Your Temporary Password",
        html: PASSWORD.replace('confirmation_password', randomNumber)
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }
}