const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const valid = require('./validate');

/* GET home page. */
router.post('/', function(req, res, next) {
  if (valid.message(req.body)) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: 'j.clifton1473@gmail.com',
        from: req.body.email,
        subject: req.body.subject,
        text: req.body.message
      };
    sgMail.send(msg);
    res.json({
      "message": "Thanks for reaching out! Your Email is on its way 🛩",
    });
  } else {
    next(new Error('Invalid Name'))
  }


});

module.exports = router;
