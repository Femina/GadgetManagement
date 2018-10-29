const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const requestIp = require('request-ip');

const routes = {
	products: {
		get: '/api/products'
	}
};
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());
app.use(requestIp.mw())

app.get(routes.products.get, function (req, res) {
    res.sendFile(__dirname + '/client/data/products.json');
});

// app.use('*', function (req, res) {
//     const ip = req.clientIp;
//     console.log(ip);
//     res.redirect(routes.products.get);
// });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });


app.listen(process.env.PORT || 5000)
console.log(`[products] API Server started on 5000.`);
