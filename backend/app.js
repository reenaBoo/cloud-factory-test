const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

// Create Express Server
const app = express();

// Configuration
const PORT = 3001;
const HOST = 'localhost';
const { API_BASE_URL } = process.env;

// Logging the requests
app.use(morgan('dev'));
app.use(cors());

// Proxy Logic :  Proxy endpoints
app.use(
  '/api',
  createProxyMiddleware({
    target: API_BASE_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/api': 'api/v2/tickers',
    },
  }),
);

// Starting our Proxy server
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});