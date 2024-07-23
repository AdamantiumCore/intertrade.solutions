import nodemailer from "nodemailer";
const sendEmail = (email, subject, template, context) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',//the error is comming from the host
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    var __dirname = "";
    let mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: subject,
        text: "TEXTT"
        // attachments: [{
        //     filename: 'logo.png',
        //     path: __dirname + '/../views/layouts/logo.png',
        //     cid: 'logo'
        // }],
        // template: template,
        // ctx: context
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            transporter.close();
        }
    });
}
const sendVerifyUserEmail = (email, username, verificationCode) => {
    let subject = 'Please verify your account!';
    let template = 'verify-user';//we need to create template here
    let context = {
        pageTitle: 'Verify User',
        username: username,
        verificationCode: verificationCode
    }

    sendEmail(email, subject, template, context);
}
const sendForgotPasswordEmail = (email, username) => {
    let subject = 'Intertrade.Solutions Forgot Password!';
    let template = 'forgot-password';// we need template here
    let context = {
        pageTitle: 'Forgot Password',
        username: username,
        url: `${process.env.SITE_URL}/PasswordReset?un=${username}`
    }

    sendEmail(email, subject, template, context);
}

export {
    sendVerifyUserEmail,
    sendForgotPasswordEmail
}