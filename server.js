var api_key = 'key-2cd3537191d3a31aac7bc257dc32713d';
var domain = 'https://api.mailgun.net/v3/https://warm-sands-84114.herokuapp.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();



app.use(bodyParser.json());
app.set('port', process.env.PORT || 8080); 

app.listen(app.get('port'), function () {
    console.log("You're a wizard, Harry. I'm a what? Yes, a wizard, on port", app.get('port'));
});

app.post("/api/post", function(req, res) {

    var data = {
        from: 'Liana Technologies <newsletter@lianatech.com>',
        to: email,
        subject: 'Your subscription',
        text: 'Thank you for subscribing to Liana Technologies newsletter!'
    };

    mailgun.messages().send(data, function (error, body) {
    console.log(body);
    });

});