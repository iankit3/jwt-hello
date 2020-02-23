const express = require('express');
const app = express();

require('dotenv').config();
const PORT =  process.env.PORT || 4000;
const bodyParser = require('body-parser');

let rest = require('./routes/Rest');
let auth = require('./routes/Auth');
let isAuthorised = require("./Utils/Authorisation");

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/v1/rest', isAuthorised, rest);
app.use('/api/v1/auth', auth);



app.listen(PORT, () => {
    console.log(`Application started on ${Date.now()} at ${PORT}`)
})