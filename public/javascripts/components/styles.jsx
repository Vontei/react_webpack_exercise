import React, { Component, PropTypes } from 'react';

export class Styles extends Component {
  var styles = StyleSheet.create({
    base: {
      width: 38,
      height: 38,
    },
    background: {
      backgroundColor: '#222222',
    },
    active: {
      borderWidth: 2,
      borderColor: '#00ff00',
    },
  });
}
