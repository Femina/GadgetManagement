const express = require('express');
const cors = require('cors');
const app = express();
const requestIp = require('request-ip');


const serverPort = 5000;

const routes = {
	products: {
		get: '/api/products'
	}
};

app.use(cors());
app.use(requestIp.mw())

app.get(routes.products.get, function (req, res) {
    res.sendFile(__dirname + '/client/data/products.json');
});

app.use('*', function (req, res) {
    const ip = req.clientIp;
    res.end(ip);
    res.redirect(routes.products.get);
});


app.listen(serverPort);
console.log(`[products] API Server started on ${serverPort}.`);
