const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { version } = require('./package.json');
const reviewRouter = require('./routes/review');

// server constant variables
const SERVER_PORT = 5000;

// instantiate server
const server = express();

// middleware
server.use(cors({ methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
server.use(morgan('dev'));
server.use(express.json());

// default route
server.get('/', (_, res) => {
  res.json({ 'kumara-server': `version ${version}` });
});

// resource (REST) routes
server.use('/reviews', reviewRouter);

// start the server
server.listen(SERVER_PORT, () => {
  console.log(`\n\t-= Kumara server listening on port ${SERVER_PORT} =-`);
});
