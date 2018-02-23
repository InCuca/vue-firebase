/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Sends an email on invite.
exports.sendEmailWelcome = functions.database.ref('/invites/{uid}').onWrite((event) => {

  const snapshot = event.data;
  const val = snapshot.val();

  const mailOptions = {
    from: '"My App" <noreply@myapp.com.br>',
    to: val.email,
  };

  // Building Email message.
  mailOptions.subject = 'Welcome to My App!!';
  mailOptions.text = 'You have been registered!';
  mailOptions.html = 'You have been registered!';

  return mailTransport.sendMail(mailOptions)
    .then(() => console.log(`Welcome email sent to:`, val.email))
    .catch((error) => console.error('Error sending welcome email:', error));
});
