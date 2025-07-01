import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

class SendEmail{
    async mailerSendEmail(email) {
        "use strict";
        async function main() {
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                logger: true,
                secureconnection: false,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD
                },
                tls: {
                    rejectUnAuthorized: true
                }
            });
            let info = await transporter.sendMail({
                from: email,
                to: process.env.EMAIL_ENVIAR,
                subject: "IMPORTANTE",
                text: "Recuperar senha",
                html:'<br><br><strong>send by </strong>' + email
            });
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }
        main().catch(console.error);
    }
}

module.exports = SendEmail;