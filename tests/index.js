const request = require('supertest');
const server = require('../index');
const routes = require('./routes');

// runs routes tests
routes(server, request);
