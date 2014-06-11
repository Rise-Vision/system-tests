"use strict";
var nodemailer
   ,transport
   ,message

if (process.argv.length < 3) {
  console.log("Usage: node script-name email-to-address");
  return 1;
}

nodemailer = require('nodemailer');

transport = nodemailer.createTransport("Sendmail");

message = {
  from: "<jenkins@risevision.com>"
 ,to: process.argv[2]
 ,subject: "build image"
 ,attachments: [{fileName: "screenshot.png", filePath: "./screenshot.png"}]
 ,text: "build text"};

console.log('sending screenshot to ' + message.to);

return emailScreenshot();

function emailScreenshot() {
  transport.sendMail(message, function(err) {
    if(err){
      console.log("\nThere was an error attempting to send mail.");
      console.log("Is sendmail installed?\n");
      console.log(err);
      return 1;
    }else{
      console.log("Message sent");
      return 0;
    }
  });
}
