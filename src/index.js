const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const unauthorizedRoutes = require('./routes/api');

// Unauthorized Routes
app.use('/', unauthorizedRoutes)

var port = process.env.PORT || 3020

app.listen(port, () => {
    console.log(`Server started on port:  http://localhost:${port}`)
});