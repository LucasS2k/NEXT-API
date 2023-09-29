import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nextclthng@gmail.com",
    pass: "gzlf rhbo zaoo vpiu",
  },
  from: "nextclthng@gmail.com",
});

export const sendEmail = async (to: string, code: string): Promise<void> => {
  const mailOptions = {
    from: '"Next Clothing" nextclthng@gmail.com ',
    to,
    subject: "Código de verificación",
    text: `Su código de verificación de inicio de sesión de NEXT
            .
            Su código es ${code}

            Alguien acaba de iniciar sesión en su cuenta. Si no fue usted, le recomendamos que cambie su contraseña de inmediato
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Correo electrónico enviado");
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
  }
};
