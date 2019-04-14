import React from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import styles from './styles';

class TermpaperComponent extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.data.title,
    tabBarVisible: false
  });
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  componentWillMount() {
    const { messages } = this.props.navigation.state.params.data;
    this.setState({
      messages
    });
  }
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        renderUsernameOnMessage={true}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 4
        }}
      />
    );
  }
}

export default TermpaperComponent;
