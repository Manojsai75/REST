const express = require('express');
const allRoutes =require('./src/route/restRoute.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
allRoutes(app);
app.get('/', (req, res) =>
    res.send(`Your node and express server is running on port: ${port}`)
);

app.listen(port, () => {
    console.log("restAPI is running on port: ");
});

