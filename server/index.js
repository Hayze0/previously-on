const express = require('express');
const request = require('request');
const app = express();
const cors = require('cors');
app.use(cors());
const crypto = require('crypto');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const key = '?key=4d21bb23b1fb';

app.post('/connection', function(req, res) {
    let data = req.body.password;
    data = crypto.createHash('md5').update(data).digest("hex");

    const log = {
        email: req.body.email,
        password: data
    };

    const options = {
        method: 'POST',
        url: 'https://api.betaseries.com/members/auth' + key,
        headers:
            {
                'content-type': 'application/json',
                Authorization: 'Basic Og=='
            },
        body:
            {login: log.email, password: data},
        json: true
    };


    request(options, function (error, resp, body) {
        if (error) throw new Error(error);
        res.send(body);
    });



});

app.get('/series', function(req, res) {

    const auth = req.headers.authorization;
    const options = {
        method: 'GET',
        url: 'https://api.betaseries.com/members/infos' + key,
        headers:
            {
                'content-type': 'application/json',
                authorization: auth
            },
    };

    request(options, function (error, resp, body) {
        if (error) throw new Error(error);
        res.send(body);
    });
});


app.post('/series/list', function (req, res) {
    const idSeries = {
       id: req.body.id,
    };
    const auth = req.headers.authorization;
    const options = {
        method: 'POST',
        url: 'https://api.betaseries.com/shows/favorite' + key,
        body:
            {
                id: idSeries.id
            },
        headers:
            {
                'content-type': 'application/json',
                authorization: auth
            },
        json: true,

    };
    request(options, function (error, resp, body) {
        if (error) throw new Error(error);
        res.send(body);
    });
});

app.post('/seasons', function (req, res) {
    const paramUri = {
        id: req.body.params.id,
        key: '4d21bb23b1fb'
    };
console.log(req.params);
    var options = { method: 'GET',
        url: 'https://api.betaseries.com/shows/seasons',
        qs: {
            id: paramUri.id,
            key: paramUri.key
        },
        headers:
            {
                'cache-control': 'no-cache',
                accept: 'application/json' } };

    request(options, function (error, resp, body) {
        if (error) throw new Error(error);
        res.send(body);
    });
});
app.post('/episodes', function (req, res){
   const paramUri= {
       id: req.body.params.id,
       season: req.body.params.season,
       key: '4d21bb23b1fb'
   };

    var options = { method: 'GET',
        url: 'https://api.betaseries.com/shows/episodes',
        qs: {
            id: paramUri.id,
            season: paramUri.season,
            key: paramUri.key
        },
        headers:
            {
                'cache-control': 'no-cache',
                accept: 'application/json' } };

    console.log(paramUri);
    request(options, function (error, resp, body) {
        if (error) throw new Error(error);
        res.send(body);
    });
});
console.log('serveur ouvert sur le port 8080');
app.listen(8080);
