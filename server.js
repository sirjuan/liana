var api_key = 'key-2cd3537191d3a31aac7bc257dc32713d';
var domain = 'app1e2584f97c124280b097ef401a2095f9.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var express = require('express');
var app = express();




app.set('port', process.env.PORT || 8080); 

app.listen(app.get('port'), function () {
    console.log("You're a wizard, Harry. I'm a what? Yes, a wizard, on port: ", app.get('port'));
});

app.post("/api/post", function(req, res) {

    var data = {
        from: 'Liana Technologies <newsletter@lianatech.com>',
        to: req.body.email,
        subject: 'Your subscription',
        text: 'Thank you for subscribing to Liana Technologies newsletter!'
    };

    mailgun.messages().send(data, function (error, body) {
        if (error) {
        handleError(res, error, "Failed to send email");
        } else {
        console.log('Succeeded sending mail');
        res.status(201).json(body.ops[0]);
        }       
        });

});

// Error handler for the api
function handleError(res, reason, message, code) {
console.log("API Error: " + reason);
res.status(code || 500).json({"Error": message});
}