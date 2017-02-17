import React, { Component } from 'react';
import logo from '../logo.svg';
import ChannelsList from '../components/ChannelsList/ChannelsList';
import ChannelHeader from '../components/ChannelHeader/ChannelHeader';
import MessagePane from '../components/MessagePane/MessagePane';
import Sidebar from '../components/Sidebar/Sidebar';
import '../lato.css';
import '../App.css';

class App extends Component {
  state = {
    channels: {
      regular: [
        'daily-walk', 'house-rules', 'territory-marking', 'pooping-orientation'
      ],
      starred: [
        'free-food', 'free-toys', 'dog-parks', 'human-tricking', 'sleeping', 'owner-training'
      ],
      directMessage: [
        'Slackbot', 'Jonathan', 'Grace', 'Michelle', 'Edwin', 'Bella'
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <ChannelsList channels={this.state.channels} />
        <div className="content">
          <ChannelHeader />
          <div className="channel-content">
            <MessagePane />
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
