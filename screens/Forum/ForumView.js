import React from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';
import CreateModal from '../../core/components/CreateModal/index';
import Fab from '../../core/components/Fab/index';
import ForumItem from './components/ForumItem/index';
import Forum from './mocks/mockForum';

class ForumView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      forum: Forum
    };
  }
  logout = () => {
    this.props.logout();
  };
  openForum = id => {
    this.props.navigation.navigate({
      routeName: 'ForumDetail',
      params: {
        data: this.state.forum[id]
      },
      key: `ForumDetail${id}`
    });
  };
  addForum = () => {
    this.setState({ modalVisible: true });
  };
  closeModal = () => {
    this.setState({ modalVisible: false });
  };
  saveAddForm = state => {
    this.setState({
      forum: {
        ...this.state.forum,
        [state.title]: {
          title: state.title,
          description: state.description,
          messages: []
        }
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.keys(this.state.forum)}
          keyExtractor={(item, index) => `forum${item}`}
          renderItem={({ item }) => <ForumItem data={{ ...this.state.forum[item], id: item }} openForum={this.openForum} />}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
        <Fab onPress={this.addForum} name="add" position={{ bottom: 10, right: 10 }} />
        <CreateModal
          closeModal={this.closeModal}
          modalVisible={this.state.modalVisible}
          save={this.saveAddForm}
        />
      </View>
    );
  }
}

export default ForumView;
