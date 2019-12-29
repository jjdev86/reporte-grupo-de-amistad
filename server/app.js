const express = require('express');
const path = require('path');
// Middleware
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.Promise = global.Promise;

// Router
const routes = require('./routes/routes');

const app = express();

// Logging and Parsing
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());


// Use Routes
app.use('/', routes);

// Serve static files from build folder to client
app.use(express.static(`${__dirname}/../build`));

// Listen on Port
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;

