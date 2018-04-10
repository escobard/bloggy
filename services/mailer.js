const sendgrid = require('sendgrid'),
sendGrid = require('../constants/config'),
// creates a helper from the sendgrid lib
helper = sendgrid.mail;

class Mailer extends helper.Mail{

}