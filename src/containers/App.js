import React, { Component } from 'react';
import logo from '../logo.svg';
import '../lato.css';
import '../App.css';
import ChannelsList from '../components/ChannelsList/ChannelsList';
import ChannelHeader from '../components/ChannelHeader/ChannelHeader';
import MessagePane from '../components/MessagePane/MessagePane';
import Sidebar from '../components/Sidebar/Sidebar';
import modality from '../libs/focusRing';

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
    },

    componentFocus: 'none',
    focus: '',
    focusableComponents: []
  };

  /*
    Supports two different yet familiar keys (`Enter` and `Escape`) to
    handle Component-Based Focus Management
   */
  handleFocus = (e, component) => {
    switch(e.key) {
      // When the user has focus on a component, pressing the
      // `enter` key should begin interacting with a component.
      // Focus to move to the first focusable element in said component.
      case 'Enter':
        this.setState({ focus: component });
        this.focusOnFirstInteractiveElement();
        break;

      // When the user has focus on a component or element, pressing the
      // `esc` key should stop interacting with said component or element.
      // Focus to move to the direct parent compoent.
      case 'Escape':
        this.setState({ focus: 'none' });
        this.focusOnParentComponent(component);
        break;
    }
  };

  /*
    When we begin interacting with a component, we need to bring
    focus to the first interactive element or child component.
   */
  focusOnFirstInteractiveElement() {
    const firstInteractiveElement = document.activeElement.querySelectorAll('[tabIndex]')[0];

    if (firstInteractiveElement) {
      firstInteractiveElement.focus();
    }
  }

  /*
    When we stop interacting with interactive element or child
    component, we need to bring focus to the immediate parent component.
   */
  focusOnParentComponent(component) {
    const componentElement = document.getElementsByClassName(component)[0];

    if (componentElement) {
      componentElement.focus();
    }
  }

  componentDidMount() {
    modality();
  }

  render() {
    return (
      <div className="app">
        <ChannelsList
          channels={this.state.channels}
          focus={this.state.focus}
          focusLevel={1}
          handleFocus={this.handleFocus}
        />
        <div className="content">
          <ChannelHeader
            hasFocus={this.state.focus === 'channel-header'}
            handleFocus={this.handleFocus}
          />
          <div className="channel-content">
            <MessagePane hasFocus={this.state.focus === 'message-pane'} />
            <Sidebar hasFocus={this.state.focus === 'sidebar'} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
