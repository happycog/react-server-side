const React = require('react');
const axios = require('axios');

class Home extends React.Component {
  render() {
    return React.createElement('p', {}, 'There are '+this.props.bus.length+' busses out right now.');
  }
}

Home.defaultProps = {
  bus: []
};

module.exports = Home;
