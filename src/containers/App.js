import React, { Component } from 'react';
import logo from '../logo.svg';
import ChannelsList from '../components/ChannelsList/ChannelsList';
import ChannelHeader from '../components/ChannelHeader/ChannelHeader';
import MessagePane from '../components/MessagePane/MessagePane';
import Sidebar from '../components/Sidebar/Sidebar';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ChannelsList />
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
