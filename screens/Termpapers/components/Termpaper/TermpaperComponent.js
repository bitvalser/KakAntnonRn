import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import styles from './styles';
import moment from 'moment';

class TermpaperComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTaked: false
    };
  }
  take = () => {
    this.setState({ isTaked: true });
    this.props.takeTp(this.props.termpaper.theme);
  };
  render() {
    const { theme, description, accepted, updatedAt } = this.props.termpaper;
    return (
      <View style={styles.container} elevation={5}>
        <View style={styles.themeWrapper}>
          <Text style={styles.header}>{theme}</Text>
        </View>
        <View style={styles.dataWrapper}>
          <Text style={styles.h2}>Описание</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.date}>{moment(updatedAt).format('DD.MM.YYYY')}</Text>
          {!(accepted || this.state.isTaked) ? (
            <TouchableNativeFeedback onPress={this.take}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>ВЗЯТЬ</Text>
              </View>
            </TouchableNativeFeedback>
          ) : (
            <Text style={styles.warn}>Занята</Text>
          )}
        </View>
      </View>
    );
  }
}

export default TermpaperComponent;
