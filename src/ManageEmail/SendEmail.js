const nodemailer = require ("nodemailer")

require('dotenv').config();

const sendEmails=async(recipient,subject,message)=>{
      
    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:process.env.EMAIL_ADDRESS,
            pass:process.env.PASSWORD
        },
      });
  
      let mailOptions = {
        from: `"Qatar Event Hub" <${process.env.EMAIL_ADDRESS}>`,
        to: recipient,
        subject: subject,
        text: message,
      };
      try {
        await mailTransporter.sendMail(mailOptions);
        console.log("Email sent successfully....");
      } catch (error) {
        console.log("Error sending email:", error);
        throw new Error("Error sending the verification email.");
      }

}

module.exports = sendEmails
