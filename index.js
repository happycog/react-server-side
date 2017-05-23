const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// const el = React.createElement('p', {}, 'hi there');
// console.log(ReactDOMServer.renderToString(el));
// console.log(ReactDOMServer.renderToStaticMarkup(el));

app.get('/', function (req, res) {
  const controller = require('./HomeController.js');
  controller().then(function (data) {
    const Home = require('./Home.js');
    const el = React.createElement(Home, {"data": data});
    res.send(ReactDOMServer.renderToStaticMarkup(el));
  });
})

// app.get('/news', function (req, res) {
//   const el = require('./components/news.jsx');
//   res.send(ReactDOMServer.renderToStaticMarkup(el))
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
