import React, { Component, PropTypes } from 'react';
import moment from 'moment';
// import {createStylesheet} from 'react-stylesheet'



export default class Message extends Component {
  static propTypes = {
    author: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
  }


  componentDidMount() {
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, moment.duration(1, 'minute').asMilliseconds());
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let stylesheet = {
        foo: {
          color: 'yellow',
          backgroundColor: 'black'
        }
    }
    return (
      <div className="message" style={stylesheet.foo}>
        <div className="message__author-line">
          <div className="message__author">{this.props.author}</div>
          <div className="message__created-at">{moment(this.props.createdAt).fromNow()}</div>
        </div>
        <div className="message__content">{this.props.content}</div>
      </div>
    )
  }
}
