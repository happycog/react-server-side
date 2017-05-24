const React = require('react');
const axios = require('axios');
const Home = require('./Home.js');

module.exports = class extends React.Component {
  static prefetch() {
    return axios.get('http://www3.septa.org/beta/TransitView/23');
  }

  render() {
    return React.createElement(Home, this.props);
  }
}
