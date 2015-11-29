import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './components/message';
import MessageCreator from './components/message-creator';
import css from '../stylesheets/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: 'Nick',
      messages: []
    };
  }



  addMessage(newContent,author) {
    const messages = this.state.messages;
    messages.unshift({
      id: this.state.messages.length,
      author: author,
      content: newContent,
      createdAt: new Date()
    });
    this.setState({
      messages: messages
    });
  }

  render() {
    return (
      <div>
        <label>Pick a User Name</label>
        <MessageCreator create={this.addMessage.bind(this)} />
        {
          this.state.messages.map(message => {
            return <Message
                author={message.author}
                content={message.content}
                createdAt={message.createdAt}
                key={message.id} />;
          })
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#react-mount'));
