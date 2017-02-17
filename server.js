var api_key = 'key-2cd3537191d3a31aac7bc257dc32713d';
var domain = 'warm-sands-84114.herokuapp.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var express = require('express');
var app = express();




app.set('port', process.env.PORT || 8080); 

app.listen(app.get('port'), function () {
    console.log("You're a wizard, Harry. I'm a what? Yes, a wizard, on port: ", app.get('port'));
});

app.get("/api/post/:email", function(req, res) {
    console.log(req.params.email);
    var data = {
        from: 'Liana Technologies <newsletter@lianatech.com>',
        to: req.params.email,
        subject: 'Your subscription',
        text: 'Thank you for subscribing to Liana Technologies newsletter!'
    };
    console.log(data);

    mailgun.messages().send(data, function (error, body) {
        console.log(error);
    console.log(body);
    });

});
