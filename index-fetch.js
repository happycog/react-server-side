const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

app.get('/', function (req, res) {
  const HomeController = require('./HomeController.js');

  const datafetch = (HomeController.prefetch) ? HomeController.prefetch :new Promise(function (fufill, reject) {
  fufill({});
  });

  datafetch().then(function (prefetchResponse) {
    const el = React.createElement(HomeController, prefetchResponse.data);
    res.end(ReactDOMServer.renderToStaticMarkup(el));
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
