const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const matchPath = require('react-router').matchPath;
const RoutingContext = require('react-router').RoutingContext;
const StaticRouter = require('react-router').StaticRouter;
const Switch = require('react-router').Switch;
const routes = require('./routes.js');

const switchEl = React.createElement(Switch, {}, ...routes);

app.get('*', function (req, res) {
  const context = {};
  const staticRouter = React.createElement(StaticRouter, {location: req.path, context: context}, switchEl);
  res.end(ReactDOMServer.renderToString(staticRouter));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

// const routes = require('./routes.js');
// for (let route of routes) {
//   const match = matchPath('/', route.props);
//   if (match) {
//     const el = React.createElement(route.props.component, match.params);
//     console.log(ReactDOMServer.renderToString(el));
//     break;
//   }
// }

// const routes = require('./routes.js');
// const el = React.createElement(Switch, {}, routes);

// const context = {};
// const staticRouter = React.createElement(StaticRouter, {location: '/hello/mark', context: context}, el);
// console.log(ReactDOMServer.renderToStaticMarkup(staticRouter));
