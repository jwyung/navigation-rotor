import React, { Component } from 'react';
import logo from '../logo.svg';
import '../lato.css';
import '../App.css';
import ConversationsList from '../components/ChannelsList/ConversationsList';
import ChannelHeader from '../components/ChannelHeader/ChannelHeader';
import MessagePane from '../components/MessagePane/MessagePane';
import modality from '../libs/focusRing';

class App extends Component {
  state = {
    conversations: {
      favorites: [
        { name: 'Free food', time: '6:20 PM' },
        { name: 'Free toys', time: '2:45 PM' },
        { name: 'Free massages', time: '8:20 PM' },
        { name: 'Dog parks', time: '7:23 AM' },
        { name: 'Human tricking', time: '3:02 PM' },
        { name: 'Sleeping', time: '9:58 AM' },
        { name: 'Owner training', time: '7:28 PM' },
        { name: 'Jonathan', time: '10:23 PM' },
        { name: 'Grace', time: '11:22 PM' },
      ],
      regular: [
        { name: 'Daily walk', time: '3:11 PM' },
        { name: 'House rules', time: '5:25 PM' },
        { name: 'Territory marking', time: '1:58 PM' },
        { name: 'Pooping orientation', time: '11:18 AM' },
        { name: 'Michelle', time: '6:36 PM' },
        { name: 'Edwin', time: '9:15 PM' },
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
        <ConversationsList
          conversationsList={this.state.conversations}
          focus={this.state.focus}
          focusLevel={1}
          handleFocus={this.handleFocus}
        />
        <div className="content">
          <ChannelHeader
            focusLevel={1}
            handleFocus={this.handleFocus}
          />
          <div className="channel-content">
            <MessagePane
              focusLevel={1}
              handleFocus={this.handleFocus}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
