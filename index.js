//importing modules
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

// importing routers
const productsRouter = require('./routes/products.route');
const multimediaRouter = require('./routes/multimedia.route');

//setting up the PORT
const PORT = process.env.PORT || 3000;

//assigning the variable app to express
const app = express();

// Logging
app.use(morgan('short'));

// Enable Cross Origin Resource Sharing to all origins by default
app.use(cors());

// Transforms raw string of req.body into JSON
app.use(bodyParser.json());

// Parses urlencoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', 1);

// Home
app.get('/', (req, res, next) => {
  res.json({ info: 'Final project by David Perales Rodriguez' })
});

// Products
app.use('/api', productsRouter);

// Multimedia
app.use('/api', multimediaRouter);


app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}.`)
});

