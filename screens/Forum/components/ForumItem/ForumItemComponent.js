import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import styles from './styles';

class ForumItemComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  openForum = () => {
    this.props.openForum(this.props.data.id);
  };
  render() {
    const { title, description } = this.props.data;
    return (
      <TouchableNativeFeedback onPress={this.openForum}>
        <View style={styles.container} elevation={2}>
          <View style={styles.themeWrapper}>
            <Text style={styles.header}>{title}</Text>
          </View>
          <View style={styles.dataWrapper}>
            <Text style={styles.h2}>Описание</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default ForumItemComponent;
