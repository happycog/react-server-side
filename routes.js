const React = require('react');
const Route = require('react-router').Route;
const Home = require('./Home.js');

module.exports = [
  React.createElement(Route, {path: '/', exact: true, component: Home}),
  React.createElement(Route, {path: '/news', render: function () { return React.createElement('p', {}, 'Hello News!'); }}),
  React.createElement(Route, {path: '/hello/:name', render: function ({match}) { return React.createElement('p', {}, 'Hello '+match.params.name+'!'); }})
];
