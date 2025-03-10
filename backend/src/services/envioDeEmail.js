class EnvioEmail{
    async mailerEnviaEmail(email) {
        "use strict";
        const nodemailer = require("nodemailer");
        async function main() {
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // verdadeiro para portas 465, 587 = false
                logger: true,
                secureconnection: false,
                auth: {
                    user: "jonatasfernandes@alu.ufc.br",
                    pass: "xv1fg5@*57"
                },
                tls: {
                    rejectUnAuthorized: true
                }
            });
            let info = await transporter.sendMail({
                from: email,
                to: "jonatasfernandes@alu.ufc.br",
                subject: "IMPORTANTE",
                text: "Recuperar senha",
                html:'<br><br><strong>enviado por </strong>' + email
            });
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }
        main().catch(console.error);
    }
}

module.exports = EnvioEmail;