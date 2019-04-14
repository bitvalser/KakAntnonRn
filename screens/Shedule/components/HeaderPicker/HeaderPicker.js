import React from 'react';
import { View, Text, Picker } from 'react-native';
import styles from './styles';
import Shedule from '../../mocks/mockShedule';

class HeaderPickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: Object.keys(Shedule)[0]
    };
    console.log(this.state);
  }
  onValueChange = value => {
    this.setState({ page: value });
    this.props.setPage(value);
  };
  renderPickerItems = () => {
    return Object.keys(Shedule).map(key => <Picker.Item label={Shedule[key].title} value={key} />);
  };
  render() {
    return (
      <View style={styles.header}>
        <Picker selectedValue={this.state.page} style={styles.picker} onValueChange={this.onValueChange}>
          {this.renderPickerItems()}
        </Picker>
      </View>
    );
  }
}

export default HeaderPickerComponent;
